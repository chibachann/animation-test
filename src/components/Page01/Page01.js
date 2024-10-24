import React from "react";
import * as styles from "./Page01.module.css";

import Slider from "../slider/slider";

const Page01 = () => {
    return (
        <div className={styles.page01}>
            <Slider />
        </div>
    )
};  

export default Page01;
