import React, { useEffect, useState } from "react";
import * as styles from "./ChangeImageSize.module.css";

const ChangeImageSize = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setIsAnimating(true);
    }, []);
    
    return (
        <div className={styles.ChangeImageSize}>
            <div className={styles.content}>
                <img 
                    src="/images/logo.png"
                    alt="01" 
                    className={`${styles.image01} ${isAnimating ? styles.animate : ''}`}
                />
            </div>
        </div>
    );
}

export default ChangeImageSize;
