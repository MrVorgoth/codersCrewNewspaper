import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import ArticlesList from "../containers/articles_list";

export default class Board extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <SearchBar />
        </div>
        <div>
          <ArticlesList />
        </div>
      </div>
    );
  }
}
