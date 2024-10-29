import React, { useState } from "react";
import * as styles from "./AnimationText.module.css";


const AnimationText = ({ animationType, title, text }) => {
    const [key, setKey] = useState(0);
  
    const handleReset = () => {
      setKey(prev => prev + 1);
    };
  
    const renderAnimatedText = () => {
      return text.split('').map((char, index) => (
        <span 
          key={index} 
          className={`${styles.letter} ${styles[`${animationType}Letter`]}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char}
        </span>
      ));
    };
  
    return (
      <div className={styles.AnimationSet}>
        <h2 className={styles.Title}>{title}</h2>
        <div key={key} className={`${styles.Container} ${styles[animationType]}`}>
          {renderAnimatedText()}
        </div>
        <button className={styles.ResetButton} onClick={handleReset}>
          Again!
        </button>
      </div>
    );
  };

export default AnimationText;
