import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
  return (
      <Layout>
        <Head title="Acerca de" />
        <h1>Acerca de mi</h1>
        <p>Llevo 3 años en el mundo del desarrollo web, pero he mejorado mucho y soy excelente!</p>
        <p><Link to="/contact">Contáctame</Link> para ver mi trabajo</p>
      </Layout>
  )
}

export default About;