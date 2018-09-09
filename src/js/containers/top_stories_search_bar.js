import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTopStories } from "../actions";
import { Link } from "react-router-dom";

import { onClicked } from "./article_search_bar";
import Select from "react-select";

const section = [
  { label: "world", value: "world" },
  { label: "national", value: "national" },
  { label: "politics", value: "politics" },
  { label: "upshot", value: "upshot" },
  { label: "nyregion", value: "nyregion" },
  { label: "business", value: "business" },
  { label: "technology", value: "technology" },
  { label: "science", value: "science" },
  { label: "health", value: "health" },
  { label: "sports", value: "sports" },
  { label: "arts", value: "arts" },
  { label: "books", value: "books" },
  { label: "movies", value: "movies" },
  { label: "theater", value: "theater" },
  { label: "sundayreview", value: "sundayreview" },
  { label: "fashion", value: "fashion" },
  { label: "food", value: "food" },
  { label: "travel", value: "travel" },
  { label: "magazine", value: "magazine" },
  { label: "realestate", value: "realestate" },
  { label: "automobiles", value: "automobiles" },
  { label: "obituaries", value: "obituaries" },
  { label: "insider", value: "insider" }
];

class TopStoriesSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "home" };
  }

  componentDidUpdate() {
    this.props.fetchTopStories(this.state.term);
  }

  onFormChange(event) {
    if (event && event !== null) {
      this.setState({ term: event.value });
    } else{
      this.setState({term: "home"});
    }
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand bar-link">
          CodersCrewNewspaper
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link bar-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
        <div className="drop-menu" onClick={onClicked}>
          <div className="drop-title">
            TOP STORIES API <span className="fa fa-bars spa" />
            <div className="arrow" />
          </div>
          <div className="dropdown-serv">
            <Link className="drop-link" to="/article-search">
              <p className="drop-item">Article API</p>
            </Link>
            <Link className="drop-link" to="/article-search">
              <p className="drop-item">Movie API</p>
            </Link>
          </div>
        </div>
        <div className="select" style={{ width: "300px" }}>
          <Select
            isClearable
            onChange={this.onFormChange.bind(this)}
            options={section}
          />
        </div>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTopStories }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TopStoriesSearchBar);
