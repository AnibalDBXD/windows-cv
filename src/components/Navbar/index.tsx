import React from 'react';
import styles from "./index.module.scss";
import { APPLICATIONS } from '../../constants';
import Clock from './Clock';
import { IWindow } from '../Window';
import { Helmet } from "react-helmet-async";

interface INavbar {
  onOpenWindow: (title: string, src: string) => void;
  openWindows: IWindow[];
}

const Navbar = ({ onOpenWindow, openWindows }: INavbar): JSX.Element => {
  return (
    <>
      <Helmet>
        <link rel="prefetch" href="src/assets/icons/windows2.png" />
        <link rel="prefetch" href="src/assets/icons/windows3.png" />
      </Helmet>
      <ul className={styles["navbar"]}>
        <li className={styles["windows"]}>
          <button className={styles["windows__button"]} />
        </li>
        {
          APPLICATIONS.map(({ icon, name, src }) => {
            const isOpen = openWindows.some(({ title }) => title === name);
            return (
              <li className={`${styles["navbar__item"]} ${isOpen && styles["navbar--open"]}`}
                key={name}
                onClick={() => onOpenWindow(name, src || "")}
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
