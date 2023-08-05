import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";
import "7.css/gui/_window.scss";
import { motion } from "framer-motion";
import Content from './Content';
import { IApplications } from '../../types';

export interface IWindow extends Pick<IApplications, "minWith" | "minHeight" | "defaultFullScreen"> {
  src: string;
  title: string;
  minimized: boolean;
}

export interface IWindowProps extends IWindow {
  onClose: () => void;
  onMinimize: () => void;
  focus: boolean;
  onFocus: () => void;
  index: number;
}

const Window: React.FC<IWindowProps> = ({
  src,
  title,
  onClose,
  focus,
  onFocus,
  index,
  onMinimize,
  minimized,
  defaultFullScreen = false,
  minHeight,
  minWith,
}) => {
  const [isFullScreen, setFullScreen] = useState(defaultFullScreen);
  const [position, setPosition] = useState({
    top: `${10 + (index * 4)}vh`,
    left: `${10 + (index * 4)}vh`,
    display: "block",
  });

  useEffect(() => {
    setPosition({
      ...position,
      display: minimized ? "none" : "block",
    });
  }, [minimized]);

  const minHeightStyle = minHeight ? { minHeight: `${minHeight}px` } : {};
  const minWidthStyle = minWith ? { minWidth: `${minWith}px` } : {};
  const windowBodyStyle = { ...minHeightStyle, ...minWidthStyle };

  return (
    <div
      className={`${focus && styles["window--focus"]} ${styles["window_container"]}`}
      onClick={onFocus}
      style={position}
    >
      <motion.div
        className={
          `window glass ${isFullScreen && styles["window--maximized"]} ${styles["window"]}`
        }
        drag={true}
        dragElastic={false}
        dragMomentum={false}
        onClick={onFocus}
        onDoubleClick={(): void => {
          setFullScreen(!isFullScreen);
        }}
        onDrag={(event: PointerEvent): void => {
          if (isFullScreen) {
            setPosition({
              ...position,
              top: `${event.y}px`,
            });
            setFullScreen(false);
          }
        }}
      >
        <div className="title-bar" style={{ paddingLeft: '1rem' }}>
          <div className="title-bar-text">
            {title}
          </div>
          <div className={`title-bar-controls ${styles["title-bar-controls"]} `}>
            <button aria-label="Minimize"
              onClick={(event): void => {
                event.stopPropagation();
                onMinimize();
              }}
            />
            <button
              aria-label={isFullScreen ? "Restore" : "Maximize"}
              onClick={(event): void => {
                event.stopPropagation();
                setFullScreen(!isFullScreen);
              }}
            />
            <button aria-label="Close"
              onClick={(event): void => {
                event.stopPropagation();
                onClose();
              }}
            />
          </div>
        </div>
        <div className={`window-body ${styles["window-body"]} ${isFullScreen && styles["window-body--maximized"]}`} style={windowBodyStyle}>
          {!focus && <div className={styles["window-focus-handler"]} onClick={onFocus} />}
          <Content src={src} title={title} />
        </div>
      </motion.div>
    </div>
  );
};

export default Window;

