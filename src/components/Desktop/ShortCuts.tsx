import React from 'react';
import { IApplications } from '../../types';
import styles from "./index.module.scss";
import { useMobile } from '../../hooks/useMobile';

interface IShortCuts {
    applications: IApplications[];
    onClick: (app: IApplications) => void;
    className?: string;
}

const ShortCuts: React.FC<IShortCuts> = ({ applications, onClick, className }) => {
  const isMobile = useMobile();

  return (
    <ul className={`${styles["applicationList"]} ${className}`}>
      {
        applications.map((app) => {
          const { icon, name, src, newTab } = app;

          const handleOpen = (): void => {
            if (newTab) {
              window.open(src, '_blank');
            } else {
              onClick(app);
            }
          };
          return(
            <li key={name}>
              <button
                className={styles["applicationList__item"]}
                onClick={(): void => {
                  if (!isMobile) return;
                  handleOpen();
                }}
                onDoubleClick={handleOpen}
              >
                <img className={styles["item_image"]} src={icon} />
                <span className={styles["item_name"]}>{name}</span>
              </button>
            </li>
          );
        })
      }
    </ul>
  );
};

export default ShortCuts;
