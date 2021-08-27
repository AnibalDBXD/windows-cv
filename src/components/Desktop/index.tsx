import React from 'react';
import styles from "./index.module.scss";
import APPLICATIONS from '../../contants';

interface IDesktop {
  children: React.ReactNode;
  addWindow: (title: string, src: string) => void;
}

const Desktop = ({ children, addWindow }: IDesktop): JSX.Element => {
  return (
    <div className={styles["desktop"]}>
      <ul className={styles["applicationList"]}>
        {
          APPLICATIONS.map(({icon, name, src}) => (
            <li key={name}>
              <button
                className={styles["applicationList__item"]}
                onDoubleClick={(): void => addWindow(name, src || "")}
              >
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
