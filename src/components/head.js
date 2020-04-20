import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Head = ({ title }) => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  { site { siteMetadata { title } } }
`);

  return (
    <Helmet title={`${title} | ${siteMetadata.title}`} />
  )
}

export default Head;
