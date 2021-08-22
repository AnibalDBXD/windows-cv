import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../contants';

const Navbar = (): JSX.Element => {
  return (
    <ul className={styles["navbar"]}>
      <li className={styles["windows"]}>
        <button className={styles["windows__button"]} />
      </li>
      {
        APPLICATIONS.map(({ icon, name }) => (
          <li className={styles["navbar__item"]} key={name}>
            <img src={icon} />
          </li>
        ))
      }
    </ul>
  );
};

export default Navbar;
