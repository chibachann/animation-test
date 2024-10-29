// TextAnimation.jsx
import React from "react";
import AnimationText from "../AnimationText/AnimationText";
import { animations } from "./animations";
import * as styles from "./TextAnimation.module.css";

const TextAnimation = () => {
    return (
        <div className={styles.TextAnimation}>
            {animations.map((animation) => (
                <AnimationText
                    animationType={animation.type}
                    title={animation.title}
                    text={animation.text}
                />
            ))}
        </div>
    );
};

export default TextAnimation;
