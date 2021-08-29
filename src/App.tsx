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

  const handleDeleteWindow = (currentTitle: string): void => {
    setOpenWindows((currentWindow) => {
      if (!currentWindow.some(({ title }) => currentTitle === title)) {
        return currentWindow;
      }
      return currentWindow.filter(({ title }) => title !== currentTitle);
    });
  };

  return (
    <Desktop addWindow={handleAddWindow}>
      <Navbar addWindow={handleAddWindow} openWindows={openWindows} />
      {
        openWindows?.map(({ src, title }) => (
          <Window
            deleteWindow={handleDeleteWindow}
            focus={focusedWindow === title}
            key={title}
            setFocus={(title: string): void => setFocusedWindow(title) }
            src={src}
            title={title}
          />
        ))
      }
    </Desktop>
  );
}

export default App;
