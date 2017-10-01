import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const styles = {
  all: {
    color: '#58C9B9',
    border: '1px solid #58C9B9'
  },
  tech: {
    color: 'rgb(214, 139, 79)',
    border: '1px solid rgb(214, 139, 79)'
  },
  travel: {
    color: 'rgb(147, 84, 202)',
    border: '1px solid rgb(147, 84, 202)'
  },
  lifestyle: {
    color: 'rgb(72, 191, 131)',
    border: '1px solid rgb(72, 191, 131)'
  },
  books: {
    color: 'rgb(239, 86, 79)',
    border: '1px solid rgb(239, 86, 79)'
  }
};

class Menu extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    return (
      <div className="menu text-center">
        <Link className="menu-link" to="/" style={styles.all}><i className="fa fa-th-large" aria-hidden="true"></i> All</Link>
        <Link className="menu-link" to="/" style={styles.tech}><i className="fa fa-code" aria-hidden="true"></i> Tech</Link>
        <Link className="menu-link" to="/" style={styles.travel}><i className="fa fa-globe" aria-hidden="true"></i> Travel</Link>
        <Link className="menu-link" to="/" style={styles.lifestyle}><i className="fa fa-heart" aria-hidden="true"></i> Lifestyle</Link>
        <Link className="menu-link" to="/" style={styles.books}><i className="fa fa-book" aria-hidden="true"></i> Books</Link>
      </div>
    )
  }
}

export default Menu;
