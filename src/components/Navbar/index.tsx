import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../constants';
import Clock from './Clock';
import { IWindow } from '../Window';

interface INavbar {
  addWindow: (title: string, src: string) => void;
  openWindows: IWindow[];
}

const Navbar = ({ addWindow, openWindows }: INavbar): JSX.Element => {
  return (
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
              onClick={(): void => addWindow(name, src || "")}
            >
              <img src={icon} />
            </li>
          );
        }
        )
      }
      <Clock />
    </ul>
  );
};

export default Navbar;
