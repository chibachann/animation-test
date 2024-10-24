import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./big_slider.module.css";

const BigSlider = () => {
    // GraphQLでimages配下の画像を取得
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        absolutePath
                        childImageSharp {
                            gatsbyImageData(
                                width: 800
                                quality: 90
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `);
    

    // 画像の配列を作成
    const images = data.allFile.edges.map(edge => getImage(edge.node.childImageSharp));

    console.log('GraphQLデータ:', data);
    console.log('画像配列:', images);
    
    const initialIndex = images.length - 1;
    const [startIndex, setStartIndex] = useState(initialIndex);
    const [isActive, setIsActive] = useState(true);

    const getVisibleImages = (currentIndex) => {
        return [
            images[(currentIndex - 1 + images.length) % images.length],
            images[currentIndex],
            images[(currentIndex + 1) % images.length]
        ];
    };

    const [visibleImages, setVisibleImages] = useState(getVisibleImages(initialIndex));

    useEffect(() => {
        let timer;

        if (isActive) {
            timer = setInterval(() => {
                setStartIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % images.length;
                    setVisibleImages(getVisibleImages(newIndex));
                    return newIndex;
                });
            }, 2000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        };
    }, [isActive]);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsActive(!document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        return () => {
            setIsActive(false);
        };
    }, []);

    return (
        <div className={styles.slider}>
            {visibleImages.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.colorBox} ${index === 1 ? styles.active : ''}`}
                >
                    <GatsbyImage
                        image={image}
                        alt={`Slide ${index}`}
                        className={styles.sliderImage}
                        loading="eager"  
                        objectFit="cover"
                    />
                </div>
            ))}
        </div>
    );
}

export default BigSlider;
