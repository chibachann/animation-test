// ManyAnimation.jsx
import React from "react";
import AnimationBox from "../AnimationBox/AnimationBox";
import { animations } from "../animations";
import * as styles from "./manyAnimation.module.css";

const ManyAnimation = () => {
    return (
        <div className={styles.ManyAnimation}>
            {animations.map((animation) => (
                <AnimationBox
                key={animation.type}
                animationType={animation.type}
                title={animation.title}
                />
            ))}
        </div>
    );
};

export default ManyAnimation;
