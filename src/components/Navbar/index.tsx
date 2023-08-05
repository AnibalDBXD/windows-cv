import React, { useMemo } from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS, DRAWS } from '../../constants';
import Clock from './Clock';
import { IWindow } from '../Window';
import { Helmet } from "react-helmet-async";
import { IApplications } from '../../types';

interface INavbar {
  onOpenWindow: (app: IApplications) => void;
  openWindows: IWindow[];
}

const Navbar = ({ onOpenWindow, openWindows }: INavbar): JSX.Element => {
  const applications = useMemo(() => {
    const newApps = DRAWS.filter(({ name }) => {
      return openWindows.find(({ title }) => title === name);
    });
    return [...APPLICATIONS, ...newApps];
  }, [openWindows]);
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
            const { icon, name } = app;
            const isOpen = openWindows.some(({ title }) => title === name);
            return (
              <li className={`${styles["navbar__item"]} ${isOpen && styles["navbar--open"]}`}
                key={name}
                onClick={(): void => onOpenWindow(app)}
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
