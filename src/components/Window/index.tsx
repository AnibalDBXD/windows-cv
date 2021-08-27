import React from 'react';
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
}

const Window = ({ src, title, deleteWindow, focus, setFocus }: IWindowProps): JSX.Element => {
  return (
    <motion.div
      className={`window glass ${styles["window"]} ${focus && styles["window__focus"]}`}
      drag
      dragElastic={false}
      dragMomentum={false}
      onClick={(): void => setFocus(title)}
    >
      <div className="title-bar">
        <div className="title-bar-text">
          {title}
        </div>
        <div className={`title-bar-controls ${styles["title-bar-controls"]} `}>
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={(): void => deleteWindow(title)} />
        </div>
      </div>
      <div className={`window-body ${styles["window-body"]}`}>
        <iframe height="400" src={src} title={title} width="600" />
      </div>
    </motion.div>
  );
};

export default Window;

