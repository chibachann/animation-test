import React from "react";
import { useCount100 } from "../hooks/useCount100";
import * as styles from "./Count100.module.css";

const Count100 = () => {
    const { count, textColor } = useCount100({
        initialDelay: 1000, // 1秒待機してからスタート
        duration: 1000      // 1秒かけてカウント
    });

    return (
        <div className={styles.container}>
            <div className={styles.count100}>
                <h1>Count100 - Original</h1>
                <div className={styles.counter}>{count}</div>
            </div>

            <div className={styles.count100}>
                <h1>Count100 - Text Gradient</h1>
                <div className={styles.counter} style={{ color: textColor }}>{count}</div>
            </div>
        </div>
    );
}

export default Count100;
