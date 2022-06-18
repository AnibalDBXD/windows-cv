import React, { useState } from 'react';
import styles from "./index.module.scss";
import "7.css/gui/_window.scss";
import { motion } from "framer-motion";

export interface IWindow {
  src: string;
  title: string;
}

export interface IWindowProps extends IWindow {
  deleteWindow: (currentTitle: string) => void;
  focus: boolean;
  setFocus: (title: string) => void;
  index: number;
}

const Window = ({ src, title, deleteWindow, focus, setFocus, index }: IWindowProps): JSX.Element => {
  const [isFullScreen, setFullScreen] = useState(false);

  const handleFocus = (): void => setFocus(title);

  const position = {
    top: `${10 + (index * 4)}vh`,
    left: `${10 + (index * 4)}vh`,
  };

  return (
    <div
      className={`${focus && styles["window--focus"]} ${styles["window_container"]}`}
      onClick={handleFocus}
      style={position}
    >
      <motion.div
        className={
          `window glass ${isFullScreen && styles["window--maximized"]} ${styles["window"]}`
        }
        drag={!isFullScreen}
        dragElastic={false}
        dragMomentum={false}
        onClick={handleFocus}
      >
        <div className="title-bar" style={{ paddingLeft: '1rem' }}>
          <div className="title-bar-text">
            {title}
          </div>
          <div className={`title-bar-controls ${styles["title-bar-controls"]} `}>
            <button aria-label="Minimize" />
            <button
              aria-label={isFullScreen ? "Restore" : "Maximize"}
              onClick={(): void => setFullScreen(currentValue => !currentValue)}
            />
            <button aria-label="Close" onClick={(): void => deleteWindow(title)} />
          </div>
        </div>
        <div className={`window-body ${styles["window-body"]} ${isFullScreen && styles["window-body--maximized"]}`}>
          {!focus && <div className={styles["window-focus-handler"]} onClick={handleFocus} />}
          <iframe src={src} title={title} />
        </div>
      </motion.div>
    </div>
  );
};

export default Window;

