import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../actions";
import { Link } from "react-router-dom";
import Sticky from "react-stickynode";

import { onClicked } from "./article_search_bar";

class MovieSearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: props.term };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchMovies(this.state.term);
  }
  onFormChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return <Sticky>
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
              Movie API <span className="fa fa-bars spa" />
              <div className="arrow" />
            </div>
          <div className="dropdown-serv">
              <Link className="drop-link" to="/article-search">
                <p className="drop-item">Article API</p>
              </Link>
            <Link className="drop-link" to="/top-stories-search">
              <p className="drop-item">Top Stories API</p>
            </Link>
            </div>
          </div>

          <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
            <input onChange={this.onFormChange.bind(this)} value={this.state.term} className="form-control mr-sm-2" type="search" placeholder="Sport" aria-label="Search" />
            <button className="btn btn-default bouncy" type="submit">
              Search
            </button>
          </form>
        </nav>
      </Sticky>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(MovieSearchBar);
