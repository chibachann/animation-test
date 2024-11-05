import React from "react";
import * as styles from "./About02.module.css";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const About02 = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutcontent}>
                        
                <div className={styles.aboutTitle}>
                    <h2>
                        <AnimatedElement animationClass="slideInBottom">
                        About <br/>
                        SToRy Web <br/>
                        Solutions
                        </AnimatedElement>
                    </h2>
                    <AnimatedElement animationClass="slideInBottom">
                        <img src="/About/icon.png" alt="01" />
                    </AnimatedElement>
                    <div className={styles.aboutText}>
                        
                        <p>
                            <AnimatedElement animationClass="slideInBottom">
                            SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、
                            コンテンツ制作など、
                            お客様のビジネスをトータルでサポートする会社です。
                            
                            </AnimatedElement>
                        </p>
                    </div>  
                </div>
                <AnimatedElement animationClass="slideInBottom">
                <img src="/About/01.jpg" alt="01" />
                </AnimatedElement>
            </div>

        </div>
    );
};

export default About02;
