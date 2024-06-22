import React, { useMemo } from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS, MOBILE_NAVBAR_APPS } from '../../constants';
import Clock from './Clock';
import { IWindow } from '../Window';
import { Helmet } from "react-helmet-async";
import { IApplications } from '../../types';
import { useMobile } from '../../hooks/useMobile';

interface INavbar {
  onOpenWindow: (app: IApplications) => void;
  openWindows: IWindow[];
}

const Navbar = ({ onOpenWindow, openWindows }: INavbar): JSX.Element => {
  const isMobile = useMobile();
  const navbarApps = isMobile ? MOBILE_NAVBAR_APPS : APPLICATIONS;
  const applications = useMemo(() => {
    const newApps = DRAWS.filter(({ name }) => {
      const isInNavbar = navbarApps.some(({ name }) => name === name);
      if (isInNavbar) return false;
      return openWindows.find(({ title }) => title === name);
    });
    return [...navbarApps, ...newApps];
  }, [openWindows, navbarApps]);
  return (
    <>
      <Helmet>
        <link href="src/assets/icons/windows2.png" rel="prefetch" />
        <link href="src/assets/icons/windows3.png" rel="prefetch" />
      </Helmet>
      <ul className={styles["navbar"]}>
        <li className={styles["windows"]}>
          <button className={styles["windows__button"]} />
        </li>
        {
          applications.map((app) => {
            const { icon, name, newTab } = app;
            const isOpen = openWindows.some(({ title }) => title === name);
            return (
              <li className={`${styles["navbar__item"]} ${isOpen && styles["navbar--open"]}`}
                key={name}
                onClick={(): void => {
                  if (newTab) {
                    window.open(app.src, '_blank');
                  } else {
                    onOpenWindow(app);
                  }
                }}
              >
                <img src={icon} style={{ objectFit: 'contain' }} />
              </li>
            );
          }
          )
        }
        <Clock />
      </ul>
    </>
  );
};

export default Navbar;
