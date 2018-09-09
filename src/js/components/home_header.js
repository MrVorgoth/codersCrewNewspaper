import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeHeader extends Component {
  render() {
    return (
      <header id="home">
        <a name="top"></a>
        <div className="bg-img">
          <div className="overlay" />
        </div>
          <nav id="home-nav" className="navabar nav-transparent">
            <div className="nav-container">
              <div className="navbar-header">
                <a className="hd-link brand-link" href="#top">
                  <div className="navbar-brand">
                    <img
                      className="logo-img"
                      src="https://i.imgur.com/vkjxNX1.png"
                      alt=""
                    />
                  </div>
                </a>
              </div>
              <ul className="main-nav navbar-right">
                <li>
                  <a className="hd-link" href="#top">
                    Home
                  <span className="line -right" />
                    <span className="line -top" />
                    <span className="line -left" />
                    <span className="line -bottom" />
                  </a>
                </li>
                <li>
                  <a className="hd-link" href="#services">
                    <span className="line -right" />
                    <span className="line -top" />
                    <span className="line -left" />
                    <span className="line -bottom" />
                    Services
                  </a>
                </li>
                {/*  <li>
                <Link className="hd-link" to="/article-search">
                  Articles
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </Link>
              </li>

              <li>
                <Link className="hd-link" to="/movie-search">
                  Movies
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </Link>
              </li> */}
              </ul>
            </div>
          </nav>
      </header>
    );
  }
}
