import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ArticlesList from '../containers/articles_list';

export default class ArticleBrowser extends Component {
    render() {
        return (
            <div className="article-browser-container">
                <div className="article-search-bar">
                    <SearchBar />
                </div>
                <div className="article-list-container">
                    <ArticlesList />
                </div>
            </div>

        );
    }

}