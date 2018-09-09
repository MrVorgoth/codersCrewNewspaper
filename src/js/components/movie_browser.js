import React, { Component } from 'react';
import MovieSearchBar from '../containers/movie_search_bar';
import MoviesList from '../containers/movies_list';

export default class BookBrowser extends Component {
    
    render() {
        return <div className="article-browser-container">
            <div className="article-search-bar">
                <MovieSearchBar term="Harry Potter" />
            </div>
          <div className="article-list-container">
                <MoviesList />
            </div>   
          </div>;
    }

}