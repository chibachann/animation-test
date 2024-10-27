import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/pagination";
import * as styles from "./swiperSection.module.css";

const SwiperSection = () => {
    return (
        <div className={styles.swiperSection}>
            <Swiper
                slidesPerView={1.5} // 中央のカードと両側の一部が見える
                centeredSlides={true} // カードを中央に配置
                spaceBetween={20}
                className={styles.swiper}
                loop={true} 
                modules={[Pagination]}
                pagination={{ 
                    clickable: true
                 }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default SwiperSection;
