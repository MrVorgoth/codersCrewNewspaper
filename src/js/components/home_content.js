import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeContent extends Component {
  render() {
    return <div id="home-content">
        <h1 className="offer">Services Overview</h1>
        <div className="list-services">
            <Link className="service-link" to="/article-search" target="_blank">
            <div className="service-item">
              <i className="im im-newspaper-o ico" />
              <p className="service-text">ARTICLE SEARCH API</p>
            </div>
          </Link>

            <Link className="service-link" to="/article-search" target="_blank">
            <div className="service-item">
                    <i className="fas fa-video ico" />
            <p className="service-text">BOOK SEARCH API</p>
            </div>
          </Link>

            <Link className="service-link" to="/article-search" target="_blank">
            <div className="service-item">
              <i className="fas fa-book ico" />
            <p className="service-text">FILM SEARCH API</p>
            </div>
          </Link>
        </div>
      </div>;
  }
}