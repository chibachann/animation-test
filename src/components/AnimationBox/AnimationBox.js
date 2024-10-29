// AnimationBox.jsx
import React, { useState } from "react";
import * as styles from "./AnimationBox.module.css";

const AnimationBox = ({ animationType, title }) => {
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div className={styles.AnimationSet}>
      <h2 className={styles.Title}>{title}</h2>
      <div key={key} className={`${styles.Container} ${styles[animationType]}`}>
        {[...Array(4)].map((_, index) => (
          <div key={index} className={styles.Box} />
        ))}
      </div>
      <button className={styles.ResetButton} onClick={handleReset}>
        Again!
      </button>
    </div>
  );
};

export default AnimationBox;
