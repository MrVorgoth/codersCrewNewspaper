import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeHeader extends Component {
  render() {
    return <header id="home">
        <div className="bg-img">
          <div className="overlay" />
        </div>
        <nav id="home-nav" className="navabar nav-transparent">
          <div className="nav-container">
            <div className="navbar-header">
              <Link className="hd-link brand-link" to="/" target="_blank">
                <div className="navbar-brand">
                  <img className="logo-img" src="https://i.imgur.com/vkjxNX1.png" alt="" />
                </div>
              </Link>
            </div>
            <ul className="main-nav navbar-right">
              <li>
              <Link className="hd-link" to="/" target="_blank">
                  Home
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </Link>
              </li>
              <li>
              <Link className="hd-link" to="/article-search" target="_blank">
                  Articles
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </Link>
              </li>

              <li>
              <Link className="hd-link" to="/article-search" target="_blank">
                  Books
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>;
  }
}
