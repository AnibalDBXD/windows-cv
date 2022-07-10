import React from 'react';
import { IApplications } from '../../types';
import styles from "./index.module.scss";

interface IShortCuts {
    applications: IApplications[];
    onClick: (title: string, src: string) => void;
    className?: string;
}

const ShortCuts: React.FC<IShortCuts> = ({ applications, onClick, className }) => {
  return (
    <ul className={`${styles["applicationList"]} ${className}`}>
      {
        applications.map(({ icon, name, src, newTab }) => (
          <li key={name}>
            <button
              className={styles["applicationList__item"]}
              onDoubleClick={(): void => {
                if (newTab) {
                  window.open(src, '_blank');
                } else {
                  onClick(name, src || '');
                }
              }}
            >
              <img className={styles["item_image"]} src={icon} />
              <span className={styles["item_name"]}>{name}</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
};

export default ShortCuts;
