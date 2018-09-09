import React, { Component } from 'react';
import TopStoriesSearchBar from '../containers/top_stories_search_bar';
import TopStoriesList from '../containers/top_stories_list';

export default class TopStoriesBrowser extends Component{
    render(){
        return <div className="article-browser-container">
            <div className="article-search-bar">
              <TopStoriesSearchBar />
            </div>
            <div className="article-list-container">
              <TopStoriesList/>
            </div>
          </div>;
    }
}