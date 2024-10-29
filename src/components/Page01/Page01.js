import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as styles from "./Page01.module.css";

const Page01 = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    sourceInstanceName: { eq: "pages" }
                    relativeDirectory: { eq: "lab" }
                    extension: { in: ["js", "jsx", "tsx"] }
                }
                sort: { birthTime: ASC }
            ) {
                nodes {
                    name
                    relativePath
                }
            }
        }
    `);

    console.log('Retrieved files:', data); // デバッグ用

    const pages = data.allFile.nodes
        .filter(node => node.name !== "index" && node.name !== "Page01")
        .map(node => ({
            path: node.name,
            title: node.name
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())
                .trim()
        }));

    return (
        <div className={styles.page01}>
            <h1>Lab</h1>
            <div className={styles.ContentsContainer}>
                {pages.map((page, index) => (
                    <div key={index} className={styles.Content}>
                        <Link to={`/lab/${page.path}`}>
                            <h2>{page.title}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page01;
