import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Login extends Component {

  render() {
    return (
      <>
    		<div className="content--fixed">
    			<h1 className="brand">
						<Link to="/" className="brand__logo--small">
							<img src="/assets/images/sassquatch-icon.svg" alt="Sassquatch" /> 
							<span className="webaim-hidden">Home</span>
						</Link>
						<span className="brand__text">Sassquatch</span>
					</h1>
      		<div className="card card--padded">
      			<div className="grid">
      				<div className="grid__col--md-6 grid__col--padded-right-md grid__col--bordered-right-md">
		      			<form className="login" action="/">
		      				<h2>Login</h2>
		        			<div className="form__group">
		        				<label htmlFor="login-email">Email</label>
		        				<input type="email" id="login-email" className="form__input" />
		        			</div>
		        			<div className="form__group">
		        				<label htmlFor="login-password">Password</label>
		        				<input type="password" id="login-password" className="form__input" />
		        				<a href="#">I forgot my password</a>
		        			</div>
		        			<div className="form__group">
		        				<label htmlFor="login-remember-me"><input type="checkbox" id="login-remember-me" /> Remember my password</label>
		        			</div>
		        			<button type="submit" className="btn btn--primary">Login</button>
		      			</form>
      				</div>
      				<div className="grid__col--md-6 grid__col--padded-left-md">
      					<h2>Don't have an account?</h2>
      					<p>Your only a few simple steps away from having unlimited access to a powerful library of accessible HTML and React components. Take your project to the next level, Register an account today!</p>
      					<a href="#" className="btn btn--secondary">Register Now</a>
      				</div>
      			</div>
      		</div>
    		</div>
      </>
    );
  }
}

export default Login;
