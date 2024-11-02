import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import * as styles from "./Works01.module.css";
import AnimatedElement from "../AnimatedElement/AnimatedElement";
import AnimatedElementCenter from "../AnimatedElementCenter/AnimatedElementCenter";

const Works01 = () => {
    return (
        <div className={styles.Works01}>
            <img src="/Works/Background.jpg" alt="Background" className={styles.Background} />
            <div className={styles.Works}>
                <div className={styles.WorksContent}>
                    <AnimatedElement>
                        <h1 className={styles.WorksTitle}>
                            Our Works
                        </h1>
                    </AnimatedElement>
                    <AnimatedElement>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={10}
                            slidesPerView={1.5}
                            centeredSlides={true}
                            pagination={{ clickable: true }}
                            loop={true}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            className={styles.Swiper}
                        >
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/01.png" alt="01" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/02.png" alt="02" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/03.png" alt="03" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/01.png" alt="01" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/02.png" alt="02" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.SwiperSlide}>
                                <img src="/Works/03.png" alt="03" />
                            </SwiperSlide>
                        </Swiper>
                    </AnimatedElement>

                    <AnimatedElement>
                        <h2 className={styles.WorksSubTitle}>
                            あなたの物語を作り出す
                        </h2>
                    </AnimatedElement>

                    <div className={styles.WorksDescription}>
                        <AnimatedElementCenter>
                            <h2 className={styles.WorksDescriptionTitle}>
                                <span>今の時代に嬉しい</span><br/>
                                3つのサポート
                            </h2>
                        </AnimatedElementCenter>
                        <AnimatedElementCenter>
                            <h3 className={styles.WorksDescriptionContent}>
                                <span>No.1</span>
                                <p>
                                    完全オリジナル<br/>
                                    モダンなデザイン
                                </p>
                            </h3>
                        </AnimatedElementCenter>
                        <AnimatedElementCenter>
                            <h3 className={styles.WorksDescriptionContent}>
                                <span>No.2</span>
                                <p>
                                    SEOを含む<br/>
                                    安心安全の保守サポート
                                </p>
                            </h3>
                        </AnimatedElementCenter>
                        <AnimatedElementCenter>
                            <h3 className={styles.WorksDescriptionContent}>
                                <span>No.3</span>
                                <p>
                                    お客様に寄り添った<br/>
                                    安心の値段設定
                                </p>
                            </h3>
                        </AnimatedElementCenter>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Works01;
