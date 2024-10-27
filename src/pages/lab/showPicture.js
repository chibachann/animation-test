import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/layout';

import ShowPictureComponent from "../../components/showPictureComponent/showPictureComponent";

const ShowPicture = () => {
    return (
        <Layout>
            <ShowPictureComponent />
        </Layout>
    );
}

export default ShowPicture;

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
