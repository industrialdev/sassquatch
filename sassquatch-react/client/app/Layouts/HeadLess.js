import React, { Component } from 'react';

const HeadLess = ({ children }) => (
  <>
    <main id="main-content">
	    {children}
    </main>
  </>
);

export default HeadLess;
