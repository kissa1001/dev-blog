import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  render() {
    return(
      <div className="header">
          <div className="row" style={{marginBottom: '3%'}}>
            <div className="col-sm-4">
              <ul className="navbar_nav">
                <li className="nav_links">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav_links">
                  <Link className="nav-link" to="/about">About Me</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <Link className="navbar-brand" to="/">
                <img className="logo" src="/images/logo_transparent.png" alt="logo"/>
              </Link>
            </div>
            <div className="col-sm-4">
              <div className="social_links">
                <a href="https://github.com/kissa1001"><i className="fa fa-github" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/lina-nguyen-frontend-engineer/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="mailto:kissa101295@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        <div className="container">
          <h1 className="home-header text-center">Welcome to my life!</h1>
        </div>
      </div>
    )
  }
}

export default Navbar;
