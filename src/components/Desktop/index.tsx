import React from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS, LINKS } from '../../constants';
import ShortCuts from './ShortCuts';
import { IApplications } from '../../types';

interface IDesktop {
  children: React.ReactNode;
  onOpenWindow: (app: IApplications) => void;
}

const Desktop = ({ children, onOpenWindow }: IDesktop): JSX.Element => {
  return (
    <div className={styles["desktop"]}>
      <ShortCuts applications={APPLICATIONS} onClick={onOpenWindow} />
      <ShortCuts applications={DRAWS} className={styles["vertical-container"]} onClick={onOpenWindow} />
      <ShortCuts applications={LINKS} className={`${styles["right-container"]} ${styles["vertical-container"]}`} onClick={onOpenWindow} />
      {children}
    </div>
  );
};

export default Desktop;
