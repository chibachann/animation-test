import React from "react";
import { Link } from "gatsby";
import * as styles from "./Page01.module.css";


const Page01 = () => {


    return (
        <div className={styles.page01}>
            <h1>Lab</h1>
            <div className={styles.ContentsContainer}>
                <div className={styles.Content}>
                    <Link to="/lab/showPicture">Gatsby Image Plugin</Link>
                </div>
            </div>
        </div>
    );
};

export default Page01;
