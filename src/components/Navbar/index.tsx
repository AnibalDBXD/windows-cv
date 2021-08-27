import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../contants';
import Clock from './Clock';

interface INavbar {
  addWindow: (title: string, src: string) => void;
}

const Navbar = ({ addWindow }: INavbar): JSX.Element => {
  return (
    <ul className={styles["navbar"]}>
      <li className={styles["windows"]}>
        <button className={styles["windows__button"]} />
      </li>
      {
        APPLICATIONS.map(({ icon, name, src }) => (
          <li className={styles["navbar__item"]}
            key={name}
            onClick={(): void => addWindow(name, src || "")}
          >
            <img src={icon} />
          </li>
        ))
      }
      <Clock />
    </ul>
  );
};

export default Navbar;
