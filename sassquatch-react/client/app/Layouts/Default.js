import React, { Component } from 'react';

import Header from '../Partials/Header';
import Footer from '../Partials/Footer';

const Default = ({ children }) => (
  <>
    <Header />

    <main id="main-content">
    	<section id="page-content">
	    	<div className="container">
	      	{children}
	      </div>
      </section>
    </main>

    <Footer />
  </>
);

export default Default;
