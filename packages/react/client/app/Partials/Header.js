import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
  	<div className="container">
  		<h1 className="brand"><Link to="/" className="brand__logo"><img src="/assets/images/sassquatch.svg" alt="Sassquatch" /> <span className="webaim-hidden">Home</span></Link></h1>
	  </div>
  </header>
);

export default Header;
