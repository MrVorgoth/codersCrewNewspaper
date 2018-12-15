import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeFooter extends Component {
    render() {
        return <div className="home-footer">
            <div className="up-footer">
              <div className="logo-footer-container">
                <img className="logo-footer" src="https://i.imgur.com/vkjxNX1.png" alt="" />
              </div>

              <div className="social-list-container">
                <div className="social-list">
                  <div className="social-item">
                    <i className="fab fa-facebook-f social-ico fa-2x" />
                  </div>
                  <div className="social-item">
                    <i className="fab fa-twitter social-ico fa-2x" />
                  </div>
                  <div className="social-item">
                    <i className="fab fa-linkedin-in social-ico fa-2x" />
                  </div>
                  <div className="social-item">
                    <i className="fab fa-youtube social-ico fa-2x" />
                  </div>
                  <div className="social-item">
                    <i className="fab fa-google-plus-g social-ico fa-2x" />
                  </div>
                  <div className="social-item">
                    <i className="fab fa-github social-ico fa-2x" />
                  </div>
                </div>
              </div>
            </div>
            <div className="all-rights">
              <p className="copyright">
                COPYRIGHT © 2018. ALL RIGHTS RESERVED. DESIGNED BY
                CODERCREWNWESPAPER
              </p>
            </div>
          </div>;
    }
}