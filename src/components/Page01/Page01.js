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
            </div>
        </div>
    );
};

export default Page01;
