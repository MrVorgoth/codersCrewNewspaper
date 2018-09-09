import React, { Component } from "react";
import { Link } from "react-router-dom";
import ScrollButton from "./scroll_button";

export function scroll(){
  jQuery(function ($) {
    $('.arrow-scroll-container').click(function () { $.scrollTo($('body'), 1000); });
    $('.scroll-to-services').click(function () { $.scrollTo($("#scroll-services"), 1000); });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $(".arrow-scroll-container").fadeIn();
    }
    else {
      $(".arrow-scroll-container").fadeOut();
    }
  }
  ); 
}


export default class HomeContent extends Component {
  componentDidMount(){
    scroll();
  }
  render() {
    return <div id="home-content">
        <a href="#" id="scroll-services" /> 
        <h1 className="offer">Services Overview</h1>
        <div className="list-services">
          <Link className="service-link" to="/article-search">
            <div className="service-item">
              <i className="im im-newspaper-o ico" />
              <p className="service-text">ARTICLE SEARCH API</p>
            </div>
          </Link>

          <Link className="service-link" to="/top-stories-search">
            <div className="service-item">
              <i className="far fa-paper-plane ico" />
              <p className="service-text">TOP STORIES SEARCH API</p>
            </div>
          </Link>

          <Link className="service-link" to="/movie-search">
            <div className="service-item">
              <i className="fas fa-film ico" />
              <p className="service-text">MOVIE SEARCH API</p>
            </div>
          </Link>
        </div>
        <ScrollButton/>
      </div>;
  }
}
