import React from 'react';
import { Header, Footer } from '../components';
import '../styles/components/Layout.css'

const Layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
