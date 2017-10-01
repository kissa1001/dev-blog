import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  render() {
    return(
      <div className="header">
        <nav className="navbar navbar-toggleable-sm navbar-inverse" style={{background: 'transparent'}}>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img className="logo" src="logo_transparent.png" alt="logo"/>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              <a href="https://github.com/kissa1001"><i className="fa fa-github" aria-hidden="true"></i></a>
              <a href="https://www.linkedin.com/in/lina-nguyen-frontend-engineer/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              <a href="mailto:kissa101295@gmail.com"><i className="fa fa-envelope-o" aria-hidden="true"></i></a>
            </div>
          </div>
        </nav>
        <div className="container">
          <h1 className="home-header text-center">Welcome to my life!</h1>
        </div>
      </div>
    )
  }
}

export default Navbar;
