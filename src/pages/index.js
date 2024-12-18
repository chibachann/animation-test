import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Index from '../components/index.js';

const IndexPage = () => {
    return (
      <Layout>
        <Index />
      </Layout>
    );
  };

export default IndexPage;

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
  