import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Ops! Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </Layout>
  )
}

export default NotFound;
