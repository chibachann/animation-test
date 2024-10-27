import React from "react";
import * as styles from "./showPictureComponent.module.css";

const ShowPictureComponent = () => {


    return (
        <div className={styles.showPictureComponent}>
            <h1>Show Image</h1>
            <dic className={styles.ContentsContainer}>
                
                <div className={styles.Content}>
                    <img src="/images/01.jpg" alt="01" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/02.jpg" alt="02" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/03.jpg" alt="03" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/04.jpg" alt="04" />
                </div>
            </dic>
        </div>
    );

}

export default ShowPictureComponent;
