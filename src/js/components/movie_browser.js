import React, { Component } from "react";
import MovieSearchBar from "../containers/movie_search_bar";
import MoviesList from "../containers/movies_list";
import HomeFooter from "./home_footer";
import { Fragment } from "react";

export default class BookBrowser extends Component {
  render() {
    return (
      <Fragment>
        <div className="article-browser-container">
          <div className="article-search-bar">
            <MovieSearchBar term="Harry Potter" />
          </div>
          <div className="article-list-container">
            <MoviesList />
          </div>
        </div>
        <HomeFooter />
      </Fragment>
    );
  }
}
