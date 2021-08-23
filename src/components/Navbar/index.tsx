import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../contants';
import Clock from './Clock';

const Navbar = (): JSX.Element => {
  return (
    <ul className={styles["navbar"]}>
      <li className={styles["windows"]}>
        <button className={styles["windows__button"]} />
      </li>
      {
        APPLICATIONS.map(({ icon, name, onClick }) => (
          <li className={styles["navbar__item"]} key={name} onClick={onClick}>
            <img src={icon} />
          </li>
        ))
      }
      <Clock />
    </ul>
  );
};

export default Navbar;
