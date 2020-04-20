import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import LayoutStyles from './layout.module.scss';

const layout = ({ children }) => {
  return (
    <>
      <div className={LayoutStyles.container}>
        <main className={LayoutStyles.content}>
          <Header />
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default layout;
