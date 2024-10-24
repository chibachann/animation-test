import React from "react";
import * as styles from "./Page01.module.css";

import Slider from "../slider/slider";
import BigSlider from "../big_slider/big_slider";

const Page01 = () => {
    return (
        <div className={styles.page01}>
            <Slider />
            <BigSlider />
        </div>
    )
};  

export default Page01;
