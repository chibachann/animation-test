import React from "react";
import { Link } from "gatsby";
import * as styles from "./Page01.module.css";

const Page01 = () => {


    return (
        <div className={styles.page01}>
            <h1>Lab</h1>
            <div className={styles.ContentsContainer}>
                <div className={styles.Content}>
                    <Link to="/lab/showPicture">
                        <h2>Show Picture</h2>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link to="/lab/swiperPage">
                        <h2>Swiper</h2>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link to="/lab/autoScroll">
                        <h2>Auto Scroll</h2>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link to="/lab/scrollImagePage">
                        <h2>Scroll Image</h2>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link to="/lab/CountPage">
                        <h2>Count 100</h2>
                    </Link>
                </div>
                <div className={styles.Content}>
                    <Link to="/lab/manyAnimationPage">
                        <h2>Many Animation</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page01;
