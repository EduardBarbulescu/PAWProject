/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';
import history from '../../utils/history';

export default function Register() {
  return (
    <>
      <body>
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
                    <h3 className="text-center text-info">Register</h3>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        First name:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username" className="text-info">
                        Last name:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Last name"
                      />
                    </div>
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
                      <label htmlFor="username" className="text-info">
                        E-mail:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="E-mail"
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
                      <label htmlFor="password" className="text-info">
                        Repeat password:
                      </label>
                      <br />
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Repeat Password"
                      />
                    </div>
                    <div className="form-group">
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        className="btn btn-info btn-md"
                        value="submit"
                        onClick={() => history.push('/')}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
