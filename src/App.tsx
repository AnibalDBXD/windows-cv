import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Navbar from './components/Navbar';
import Window, { IWindow } from "./components/Window";

function App(): JSX.Element {
  const [openWindows, setOpenWindows] = useState<IWindow[]>([]);
  const [focusedWindow, setFocusedWindow] = useState("");

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
  };

  const handleCloseWindow = (currentTitle: string): void => {
    setOpenWindows((currentWindows) => {
      if (!currentWindows.some(({ title }) => currentTitle === title)) {
        return currentWindows;
      }
      return currentWindows.filter(({ title }) => title !== currentTitle);
    });
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
  }

  return (
    <Desktop onOpenWindow={handleOpenWindow}>
      <Navbar onOpenWindow={handleOpenWindow} openWindows={openWindows} />
      {
        openWindows.map(({ title, ...rest }, index) => (
          <Window
            onClose={() => handleCloseWindow(title)}
            onMinimize={() => handleMinimizeWindow(title)}
            focus={focusedWindow === title}
            index={index}
            key={title}
            onFocus={() => setFocusedWindow(title) }
            title={title}
            {...rest}
          />
        ))
      }
    </Desktop>
  );
}

export default App;
