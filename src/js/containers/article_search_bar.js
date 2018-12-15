import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchArticles } from "../actions";
import { Link } from "react-router-dom";
import { scroll } from "../components/home_content";
import ScrollButton from "../components/scroll_button";

export function onClicked(e) {
  e.preventDefault();
  document.getElementsByClassName("dropdown-serv")[0].classList.toggle("down");
  document.getElementsByClassName("arrow")[0].classList.toggle("gone");
  if (
    document
      .getElementsByClassName("dropdown-serv")[0]
      .classList.contains("down")
  ) {
    setTimeout(function() {
      document.getElementsByClassName("dropdown-serv")[0].style.overflow =
        "visible";
    }, 100);
  } else {
    document.getElementsByClassName("dropdown-serv")[0].style.overflow =
      "hidden";
  }
}

class ArticleSearchBar extends Component {
  componentDidMount() {
    scroll();
  }
  constructor(props) {
    super(props);
    this.state = { term: props.term };
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchArticles(this.state.term);
  }
  onFormChange(event) {
    this.setState({ term: event.target.value });
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
            Article API <span className="fa fa-bars spa" />
            <div className="arrow" />
          </div>
          <div className="dropdown-serv">
            <Link className="drop-link" to="/movie-search">
              <p className="drop-item">Movie API</p>
            </Link>
            <Link className="drop-link" to="/top-stories-search">
              <p className="drop-item">Top Stories API</p>
            </Link>
          </div>
        </div>
        <ScrollButton />
        <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
          <input
            onChange={this.onFormChange.bind(this)}
            value={this.state.term}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Sport"
            aria-label="Search"
          />
          <button className="btn btn-default bouncy" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticles }, dispatch);
}
export default connect(
  null,
  mapDispatchToProps
)(ArticleSearchBar);
