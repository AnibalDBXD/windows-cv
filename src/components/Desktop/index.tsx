import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../contants';

interface IDesktop {
    children: JSX.Element
}

const Desktop = ({ children }: IDesktop): JSX.Element => {

  return (
    <div className={styles["desktop"]}>
      <ul className={styles["applicationList"]}>
        {
          APPLICATIONS.map(({icon, name, onClick}) => (
            <li key={name}>
              <button className={styles["applicationList__item"]} onDoubleClick={onClick}>
                <img className={styles["item_image"]} src={icon} />
                <span className={styles["item_name"]}>{name}</span>
              </button>
            </li>
          ))
        }
      </ul>
      {children}
    </div>
  );
};

export default Desktop;
