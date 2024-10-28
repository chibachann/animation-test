import React from "react";
import { useAutoScroll } from "../hooks/useAutoScroll";
import * as styles from "./autoScrollSection.module.css";
import ScrollableImage from "../ScrollableImage/ScrollableImage";

const AutoScrollSection = () => {
    useAutoScroll({
        intervals: [3000, 3000, 3000, 3000], // カスタマイズした待機時間
        scrollDistances: [1, 1.5, 2.5, 0], // カスタマイズしたスクロール距離
        duration: 1500,
        initialDelay: 3000, // 初期待機時間
        easing: 'easeOutQuart'
    })

    return (
        <div className={styles.autoScrollSection}>
            <div className={styles.whiteWall}/>
            <ScrollableImage 
                src="/images/building.jpg"
                alt="building"
                initialScale={1.7}
                containerHeight="150vh"
            />
            <div className={styles.box2}/>
        </div>
    );
}

export default AutoScrollSection;
