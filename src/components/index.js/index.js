import React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.css";

const Index = () => {
    return (
        <div className={styles.index}>
            <h1>Index</h1>
            <div className={styles.ContentsContainer}>
                <div className={styles.Content}>
                    <Link to="/lab">
                        <h2>Lab</h2>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default Index;
