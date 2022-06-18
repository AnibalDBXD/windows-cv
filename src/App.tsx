import React, { useState } from 'react';
import Desktop from './components/Desktop';
import Navbar from './components/Navbar';
import Window, { IWindow } from "./components/Window";

function App(): JSX.Element {
  const [openWindows, setOpenWindows] = useState<IWindow[]>([]);
  const [focusedWindow, setFocusedWindow] = useState("");

  const handleAddWindow = (newTitle: string, src: string): void => {
    setOpenWindows((currentWindow) => {
      if (currentWindow.some(({ title }) => newTitle === title)) {
        return currentWindow;
      }
      return [{title: newTitle, src }, ...currentWindow];
    });
  };

  const handleCloseWindow = (currentTitle: string): void => {
    setOpenWindows((currentWindow) => {
      if (!currentWindow.some(({ title }) => currentTitle === title)) {
        return currentWindow;
      }
      return currentWindow.filter(({ title }) => title !== currentTitle);
    });
  };

  const handleMinimizeWindow = (currentTitle: string): void => {
    return;
  }

  return (
    <Desktop addWindow={handleAddWindow}>
      <Navbar addWindow={handleAddWindow} openWindows={openWindows} />
      {
        openWindows?.map(({ src, title }, index) => (
          <Window
            onClose={() => handleCloseWindow(title)}
            onMinimize={() => handleMinimizeWindow(title)}
            focus={focusedWindow === title}
            index={index}
            key={title}
            onFocus={() => setFocusedWindow(title) }
            src={src}
            title={title}
          />
        ))
      }
    </Desktop>
  );
}

export default App;
