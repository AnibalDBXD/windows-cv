import React from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS } from '../../constants';
import ShortCuts from './ShortCuts';

interface IDesktop {
  children: React.ReactNode;
  onOpenWindow: (title: string, src: string) => void;
}

const Desktop = ({ children, onOpenWindow }: IDesktop): JSX.Element => {
  return (
    <div className={styles["desktop"]}>
      <ShortCuts applications={APPLICATIONS} onClick={onOpenWindow} />
      <ShortCuts applications={DRAWS} className={styles["vertical-container"]} onClick={onOpenWindow} />
      {children}
    </div>
  );
};

export default Desktop;
