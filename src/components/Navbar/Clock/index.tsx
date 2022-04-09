import React, { useEffect, useState } from 'react';
import styles from "./index.module.scss";

const TIME = 30 * 1000;

const Clock = (): JSX.Element => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, TIME);

    return (): void => {
      clearInterval(interval);
    };
  }, []);


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
