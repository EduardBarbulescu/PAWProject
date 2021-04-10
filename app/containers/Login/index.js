/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';
import history from '../../utils/history';
import background from '../../images/background.png';

export default function Login() {
  return (
    <>
      <body background={background}>
        <nav className="navbar navbar-expand-lg  fixed-top" role="navigation">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} width="130" height="100" alt="" />
            </a>
          </div>
        </nav>
        <div id="login">
          <div className="container">
            <div
              id="login-row"
              className="row justify-content-center align-items-center"
            >
              <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                  <form id="login-form" className="form" action="" method="post">
                    <h3 className="text-center text-info">Login</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        Username:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="submit"
                        onClick={() => history.push('/')}
                      />
                    </div>
                    <br />
                    <div id="register-link" className="text-right">
                      <a href="/" className="text-info">
                        Register here
                      </a>
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </body>
    </>
  );
}
