import React, { useEffect } from "react";
import * as styles from "./ChangeImageSize.module.css";

const ChangeImageSize = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            
            // 背景の移動速度を遅くする
            document.querySelector(`.${styles.background}`).style.transform = 
                `translateY(${scrolled * 0.5}px)`;
            
            // 画像の移動速度を調整
            document.querySelector(`.${styles.image01}`).style.transform = 
                `translateY(${scrolled * -0.2}px)`;
            document.querySelector(`.${styles.image02}`).style.transform = 
                `translateY(${scrolled * -0.5}px)`;
            document.querySelector(`.${styles.image03}`).style.transform =
                `translateY(${scrolled * -0.4}px)`;
            document.querySelector(`.${styles.image04}`).style.transform =
                `translateY(${scrolled * -0.6}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.ChangeImageSize}>
            <div className={styles.background}></div>
            <div className={styles.content}>
                <h1>Change Image Size</h1>
                <img src="/images/building.jpg" alt="01" className={styles.image01} />
                <img src="/images/building.jpg" alt="01" className={styles.image02} />
                <img src="/images/building.jpg" alt="01" className={styles.image03} />
                <img src="/images/building.jpg" alt="01" className={styles.image04} />

            </div>
        </div>
    );
}

export default ChangeImageSize;
