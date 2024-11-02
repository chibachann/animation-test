import React from 'react';
import * as styles from './About01.module.css';
import AnimatedElement from '../AnimatedElement/AnimatedElement';

const About01 = () => {
    return (
        <div className={styles.About01}>
            <img src="/About/Background.jpg" alt="Background" className={styles.Background} />
            <div className={styles.About}>
                <div className={styles.AboutContent}>
                    <div className={styles.AboutTitle}>
                        <h1>
                            <AnimatedElement>
                                About 
                                SToRy <br/>
                                web sollutions
                            </AnimatedElement>
                        </h1>
                        <AnimatedElement >
                            <img src="/About/icon.png" alt="icon" />
                        </AnimatedElement>
                    </div>
                    
                    <AnimatedElement animationClass="slideInBottom">
                    <h2 className={styles.AboutSubTitle}>
                        Design <br/>
                        of your SToRy
                    </h2>
                    </AnimatedElement>

                    <div className={styles.AboutText}>
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
        </div>
    )

}

export default About01;
