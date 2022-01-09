import React from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS } from '../../constants';
import ShortCuts from './ShortCuts';

interface IDesktop {
  children: React.ReactNode;
  addWindow: (title: string, src: string) => void;
}

const Desktop = ({ children, addWindow }: IDesktop): JSX.Element => {
  return (
    <div className={styles["desktop"]}>
      <ShortCuts applications={APPLICATIONS} onClick={addWindow} />
      <ShortCuts applications={DRAWS} className={styles["vertical-container"]} onClick={addWindow} />
      {children}
    </div>
  );
};

export default Desktop;
