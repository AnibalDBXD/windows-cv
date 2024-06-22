import React from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS, LINKS, MOBILE_APPS } from '../../constants';
import ShortCuts from './ShortCuts';
import { IApplications } from '../../types';
import { useMobile } from '../../hooks/useMobile';

interface IDesktop {
  children: React.ReactNode;
  onOpenWindow: (app: IApplications) => void;
}

const Desktop = ({ children, onOpenWindow }: IDesktop): JSX.Element => {
  const isMobile = useMobile();
  return (
    <div className={styles["desktop"]}>
      {isMobile
        ? <ShortCuts applications={MOBILE_APPS} onClick={onOpenWindow} />
        : (
          <>
            <ShortCuts applications={APPLICATIONS} onClick={onOpenWindow} />
            <ShortCuts applications={DRAWS} className={styles["vertical-container"]} onClick={onOpenWindow} />
            <ShortCuts applications={LINKS} className={`${styles["right-container"]} ${styles["vertical-container"]}`} onClick={onOpenWindow} />
          </>
        )}
      {children}
    </div>
  );
};

export default Desktop;
