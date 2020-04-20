import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import HeaderStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site { siteMetadata { title } }
    }
  `);
  
  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.navItemActive} to="/">Inicio</Link>
          </li>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.navItemActive} to="/about">Acerca de mi</Link>
          </li>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.navItemActive} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.navItemActive} to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
