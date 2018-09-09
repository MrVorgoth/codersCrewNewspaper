import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMovies } from "../actions/";
import _ from "lodash";

import MovieItem from "../components/movie_item";
import NoResult from "../components/no_result";

class MoviesList extends Component {
  componentDidMount() {
    this.props.fetchMovies("Harry Potter");
    this.renderMovieReview(this.getData());
  }

  getData() {
    let data;
      console.log(this.props.movies[0])
    return (data = this.props.movies[0]);
  }

  renderMovieReview(movies) {
    if (movies && movies.length > 0) {
      return movies.map((movie, index) => {
        return <MovieItem key={index} movie={movie} />;
      });
    } else if (movies) {
      return <NoResult result="movie review" />;
    }
  }
  render() {
    return (
      <ul className="movie-list">{this.renderMovieReview(this.getData())}</ul>
    );
  }
}

function mapStateToProps({ movies }) {
  return { movies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
