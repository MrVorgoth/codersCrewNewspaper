import React, { Component } from "react";


export default class HomeHeader extends Component {
  render() {
    return <header id="home">
        <div className="bg-img">
          <div className="overlay" />
        </div>
        <nav id="home-nav" className="navabar nav-transparent">
          <div className="nav-container">
            <div className="navbar-header">
            <a href="#" id="scroll-top" className="hd-link brand-link">
                <div className="navbar-brand">
                  <img className="logo-img" src="https://i.imgur.com/vkjxNX1.png" alt="" />
                </div>
              </a>
            </div>
            <ul className="main-nav navbar-right">
              <li>
                <a href="#" className="hd-link" >
                  Home
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                </a>
              </li>
              <li>
              <a href="#" className="hd-link scroll-to-services">
                  <span className="line -right" />
                  <span className="line -top" />
                  <span className="line -left" />
                  <span className="line -bottom" />
                  Services
                </a>
              </li> 
            </ul>
          </div>
        </nav>
      </header>;
  }
}
