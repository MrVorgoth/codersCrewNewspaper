import React, { Component } from 'react';
import ArticleSearchBar from '../containers/article_search_bar';
import ArticlesList from '../containers/articles_list';
import HomeFooter from "./home_footer";
import { Fragment } from "react";


export default class ArticleBrowser extends Component {
    render() {
        return <Fragment>
            <div className="article-browser-container">
              <div className="article-search-bar">
                <ArticleSearchBar term="Sport" />
              </div>
              <div className="article-list-container">
                <ArticlesList />
              </div>
            </div>
            <HomeFooter />
          </Fragment>;
    }

}