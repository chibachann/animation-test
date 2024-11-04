import React from "react";
import * as styles from "./SupportDetail.module.css";

const SupportDetail = (
    {
        number,
        title,
        subTitle,
        backgroundImageSrc,

    }
) => {
    return (
        <div className={styles.SupportDetail}>
            <img src={backgroundImageSrc} alt={title} />
            <div className={styles.Content}>
                <h2 className={styles.Title}>
                    <span>No.1</span><br/>
                    Modern Design
                </h2>
                <h3 className={styles.SubTitle}>
                    完全オリジナルな<br/>
                    世界に一つだけのデザイン
                </h3>
                <img src="/SupportDetail/SupportDetail01.jpg" alt="Modern Design" />
                <p>
                    お客様の要望に合わせて、完全オリジナルなデザインを制作いたします。<br/>
                    他にはない、世界に一つだけのデザインをお楽しみください。
                </p>
            </div>
        </div>
    );

};

export default SupportDetail;
