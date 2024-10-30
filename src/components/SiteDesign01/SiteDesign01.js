import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/pagination";
import * as styles from "./SiteDesign01.module.css";
import AnimatedElement from "../AnimatedElement/AnimatedElement";

const SiteDesign01 = () => {

    return (
        <>
            <div className={styles.SiteDesign01}>
                <div className={styles.top}>
                    <div className={styles.topcontent}>
                        <div className={styles.logo}>
                            <img src="/logo/blacklogo.png" alt="logo" />
                        </div>
                        <div className={styles.Title}>
                            <h1>
                                Design 
                            </h1>
                            <h1>
                                of your SToRy
                            </h1>
                        </div>
                        <div className={styles.topImages}>
                            <img src="/Top/01.jpg" alt="01" className={styles.Box}/>
                            <img src="/Top/02.jpg" alt="02" className={styles.Box}/>
                            <img src="/Top/03.jpg" alt="03" className={styles.Box}/>
                            <img src="/Top/04.jpg" alt="04" className={styles.Box}/>
                        </div>
                    </div>
                </div>

                

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
                        </div>
                        <AnimatedElement animationClass="slideInBottom">
                        <img src="/About/01.jpg" alt="01" />
                        </AnimatedElement>
                        
                        <div className={styles.aboutText}>
                            
                            <p>
                                <AnimatedElement animationClass="slideInBottom">
                                SToRy Web Solutionsは、Webサイト制作を中心に、Webマーケティング、
                                コンテンツ制作など、
                                お客様のビジネスをトータルでサポートする会社です。
                                私たちは、最新の技術とデザインを駆使して、
                                お客様のブランド価値を最大限に引き出すWebサイトを提供します。お客様のニーズに合わせたカスタマイズと、ユーザーエクスペリエンスを重視した設計で、ビジネスの成長をサポートします。
                                </AnimatedElement>
                            </p>
                            <p>
                                <AnimatedElement animationClass="slideInBottom">
                                また、SEO対策やSNS運用など、Webマーケティングの分野でも豊富な経験を持ち、
                                お客様のオンラインプレゼンスを強化します。私たちのチームは、各分野の専門家で構成されており、
                                それぞれの知識とスキルを活かして、最適なソリューションを提供します。
                                私たちの目標は、お客様のビジネスの成功を共に実現することです。どんな小さなことでも、
                                お気軽にご相談ください。私たちは常にお客様の声に耳を傾け、最善のサービスを提供することをお約束します。
                                </AnimatedElement>
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.works}>
                    <div className={styles.workscontent}>
                        <div className={styles.worksTitle}>
                            <h2>
                                <AnimatedElement animationClass="slideInTop">
                                Our Works
                                </AnimatedElement>
                            </h2>
                        </div>

                        <AnimatedElement>
                        <Swiper
                            slidesPerView={1.8} // 中央のカードと両側の一部が見える
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
                                <img src="/Works/01.png" alt="01" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src="/Works/02.png" alt="02" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src="/Works/03.png" alt="03" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src="/Works/01.png" alt="01" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src="/Works/02.png" alt="02" />
                            </SwiperSlide>
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src="/Works/03.png" alt="03" />
                            </SwiperSlide>
                            

                        </Swiper>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </>
    );

}

export default SiteDesign01;
