import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Styles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
  {
    site { siteMetadata { author } }
  }
`);

  // Styles
  const { footer } = Styles;

  return (
    <footer className={footer}>
      <p>Creado por {data.site.siteMetadata.author}, &copy; 2020</p>
    </footer>
  )
}

export default Footer;
