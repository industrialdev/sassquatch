import React, { Component } from 'react';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

const Default = ({ children }) => (
  <>
    <Header />

    <main>
      {children}
    </main>

    <Footer />
  </>
);

export default Default;
