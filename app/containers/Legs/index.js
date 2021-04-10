/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import logo from '../../images/logo.png';
import background from '../../images/background.png';

export default function Legs() {
  return (
    <>
      <body background={background}>
        <nav className="navbar navbar-expand-lg fixed-top " role="navigation">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} width="150" height="100" alt="" />
            </a>
            <a className="navbar-brand" href="/">Home Gym</a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#exCollapsingNavbar"
            >
              &#9776;
            </button>
            <div className="collapse navbar-collapse" id="exCollapsingNavbar">
              <ul className="nav navbar-nav">
                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="/training" className="nav-link">Training</a></li>
                <li className="nav-item"><a href="/meal" className="nav-link">Meal</a></li>
              </ul>
              <span className="nav-item ml-auto "><a href="/login" className="nav-link">Login</a></span>
              <span className="nav-item "><a href="/register" className="nav-link">Register</a></span>
            </div>
          </div>
        </nav>
        <br />
        <br />
        <br />
        <div className="container-fluid mt-xl-5">
          <div className="row">
            <div className="col-2 collapse show d-md-flex pt-2 pl-0 min-vh-100" id="sidebar">
              <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/">
                    <i className="fa fa-home" />
                    {' '}
                    <span
                      className="d-none d-sm-inline"
                    />
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/chest">
                    <i
                      className="fa fa-bar-chart"
                    />
                    {' '}
                    <span className="d-none d-sm-inline">Chest</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/shoulders">
                    <i
                      className="fa fa-bar-chart"
                    />
                    {' '}
                    <span className="d-none d-sm-inline">Shoulders</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/traps">
                    <i
                      className="fa fa-bar-chart"
                    />
                    {' '}
                    <span className="d-none d-sm-inline">Traps</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/back">
                    <i
                      className="fa fa-bar-chart"
                    />
                    {' '}
                    <span className="d-none d-sm-inline">Back</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/arms">
                    <i
                      className="fa fa-bar-chart"
                    />
                    {' '}
                    <span className="d-none d-sm-inline">Arms</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/legs">
                    <i className="fa fa-download" />
                    <span className="d-none d-sm-inline">Legs</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-truncate" href="/abs">
                    <i className="fa fa-download" />
                    <span className="d-none d-sm-inline">Abs</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col pt-2 text-white">
              <h2>
                <a href="/" data-target="#sidebar" data-toggle="collapse" className="d-md-none ">
                  <i
                    className="fa fa-bars"
                  />
                </a>
                {' '}
                Content
                {' '}
              </h2>
              <h6 className="hidden-sm-down text-white">Shrink page width to see sidebar collapse</h6>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
