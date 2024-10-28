import React, { useRef } from "react";
import { useImageScale } from "../hooks/useImageScale";
import * as styles from "./ScrollableImage.module.css";

const ScrollableImage = ({ src, alt, initialScale = 1.4, containerHeight = "150vh" }) => {
    const imageRef = useRef(null);
    const scale = useImageScale(imageRef, initialScale);

    return (
        <div 
            className={styles.imageContainer} 
            style={{ height: containerHeight }}
        >
            <div className={styles.imageWrapper} ref={imageRef}>
                <img 
                    src={src}
                    alt={alt}
                    className={styles.image}
                    style={{ transform: `scale(${scale})` }}
                />
            </div>
        </div>
    );
}

export default ScrollableImage;
