import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import * as styles from "./Works01.module.css";

const Works01 = () => {
    return (
        <div className={styles.Works01}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img src="/Works/01.jpg" alt="01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Works/02.jpg" alt="02" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Works/03.jpg" alt="03" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/Works/04.jpg" alt="04" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Works01;
