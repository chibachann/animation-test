import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from "./showPictureComponent.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const ShowPictureComponent = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        absolutePath
                        childImageSharp {
                            gatsbyImageData(
                                quality: 100
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `);


    return (
        <div className={styles.showPictureComponent}>
            <h1>Gatsby Image Plugin</h1>
            <dic className={styles.ContentsContainer}>
                <div className={styles.Content}>
                    <StaticImage
                        src="../../images/01.jpg"
                        alt="01"
                        aspectRatio={5/7}
                    />
                </div>
                <div className={styles.Content}>
                    <StaticImage
                        src="../../images/02.jpg"
                        alt="02"
                        aspectRatio={5/7}
                    />
                </div>
                <div className={styles.Content}>
                    <StaticImage
                        src="../../images/03.jpg"
                        alt="03"
                        aspectRatio={5/7}
                    />
                </div>
                <div className={styles.Content}>
                    <StaticImage
                        src="../../images/04.jpg"
                        alt="04"
                        aspectRatio={5/7}
                    />
                </div>
                <div className={styles.Content}>
                    <GatsbyImage
                        image={data.allFile.edges[0].node.childImageSharp.gatsbyImageData}
                        alt="01"
                    />
                </div>
                <div className={styles.Content}>
                    <GatsbyImage
                        image={data.allFile.edges[1].node.childImageSharp.gatsbyImageData}
                        alt="02"
                    />
                </div>
                <div className={styles.Content}>
                    <GatsbyImage
                        image={data.allFile.edges[2].node.childImageSharp.gatsbyImageData}
                        alt="03"
                    />
                </div>
                <div className={styles.Content}>
                    <GatsbyImage
                        image={data.allFile.edges[3].node.childImageSharp.gatsbyImageData}
                        alt="04"
                    />
                </div>
                <div className={styles.Content}>
                    <img src="/images/01.jpg" alt="01" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/02.jpg" alt="02" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/03.jpg" alt="03" />
                </div>
                <div className={styles.Content}>
                    <img src="/images/04.jpg" alt="04" />
                </div>
            </dic>
        </div>
    );

}

export default ShowPictureComponent;
