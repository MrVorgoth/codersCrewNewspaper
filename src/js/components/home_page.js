import React, { Component } from "react";
import SearchBar from "../containers/search_bar";
import ArticlesList from "../containers/articles_list";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/articles">Article Browser</Link>
      </div>
    
    );
  }
}
