import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const Index = () => {
  const data = useStaticQuery(graphql`
    { site { siteMetadata { title author } } }
  `);

  return (
    <Layout>
      <Head title="Home" />
      <h1>Hola soy {data.site.siteMetadata.author}</h1>
      <p>Soy un desarrollador full stack que está probando gatsby.js</p>
      <p>Si quieres saber más de mi <Link to="/contact">contáctame</Link></p>
    </Layout>
  )
}

export default Index;
