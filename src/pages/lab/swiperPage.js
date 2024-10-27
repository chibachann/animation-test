import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../../components/layout";
import SwiperSection from "../../components/swiperSection/swiperSection";

const swiperPage = () => {
    return (
        <Layout>
            <SwiperSection />
        </Layout>
    );
}

export default swiperPage;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `)
    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
      </>
    );
  }
