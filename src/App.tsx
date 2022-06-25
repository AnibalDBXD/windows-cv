import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Navbar from './components/Navbar';
import Window, { IWindow } from "./components/Window";
import { Helmet } from "react-helmet-async";

function App(): JSX.Element {
  const [openWindows, setOpenWindows] = useState<IWindow[]>([]);
  const [focusedWindow, setFocusedWindow] = useState<string | null>(null);

  const handleOpenWindow = (newTitle: string, src: string): void => {
    setOpenWindows((currentWindows) => {
      const currentWindowIndex = currentWindows.findIndex(({ title }) => title === newTitle);
      if (currentWindowIndex !== -1) {
        const window = currentWindows[currentWindowIndex];
        // change window minimized state
        return [...currentWindows.slice(0, currentWindowIndex), { ...window, minimized: !window.minimized }, ...currentWindows.slice(currentWindowIndex + 1)];
      }
      return [{title: newTitle, src, minimized: false }, ...currentWindows];
    });
    setFocusedWindow(newTitle);
  };

  const handleCloseWindow = (currentTitle: string): void => {
    setOpenWindows((currentWindows) => {
      if (!currentWindows.some(({ title }) => currentTitle === title)) {
        return currentWindows;
      }
      return currentWindows.filter(({ title }) => title !== currentTitle);
    });
    setFocusedWindow(null);
  };

  const handleMinimizeWindow = (currentTitle: string): void => {
    setOpenWindows((currentWindows) => {
      return currentWindows.map(({ title, ...window }) => {
        if (title === currentTitle) {
          return { ...window, title, minimized: true };
        }
        return { title, ...window };
      });
    });
    setFocusedWindow(null);
  };
  return (
    <>
      <Helmet>
        <title>{focusedWindow || "Windows 7 - Anibal Portfolio"}</title>
      </Helmet>
      <Desktop onOpenWindow={handleOpenWindow}>
        <Navbar onOpenWindow={handleOpenWindow} openWindows={openWindows} />
        {
          openWindows.map(({ title, ...rest }, index) => (
            <Window
              focus={focusedWindow === title}
              index={index}
              key={title}
              onClose={(): void => handleCloseWindow(title)}
              onFocus={(): void => setFocusedWindow(title) }
              onMinimize={(): void => handleMinimizeWindow(title)}
              title={title}
              {...rest}
            />
          ))
        }
      </Desktop>
    </>
  );
}

export default App;
