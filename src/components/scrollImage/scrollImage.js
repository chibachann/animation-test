// components/ScrollImage.jsx
import React from "react";
import ScrollableImage from "../ScrollableImage/ScrollableImage";
import * as styles from "./scrollImage.module.css";

const ScrollImage = () => {
    return (
        <div className={styles.scrollImage}>
            <div className={styles.whiteWall}/>
            <ScrollableImage 
                src="/images/building.jpg"
                alt="building"
                initialScale={1.4}
                containerHeight="150vh"
            />
        </div>
    );
}

export default ScrollImage;
