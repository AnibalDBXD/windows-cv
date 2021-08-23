import React from 'react';
import styles from "./index.module.scss";

const Clock = (): JSX.Element => {
  const currentDate = new Date();

  const currentHour = currentDate.toLocaleTimeString(undefined, { timeStyle: "short" });
  return (
    <div className={styles["clock"]}>
      <span>
        {currentHour}
      </span>
      <span>
        {currentDate.toLocaleDateString()}
      </span>
    </div>
  );
};

export default Clock;
