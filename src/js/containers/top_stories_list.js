import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchTopStories} from '../actions';

import TopStoriesItem from '../components/top_stories_item';
import NoResult from '../components/no_result';


class TopStoriesList extends Component{
    
   componentDidMount(){
       this.props.fetchTopStories("home")
       this.renderTopStories(this.getData());
   }

    getData(){
        let data = this.props.topStories[0];
        return data;
    }


    renderTopStories(topStories){
        if (topStories && topStories.length > 0){
            return topStories.map((topStory, index) => {
                if (topStory.multimedia.length < 5 || topStory.multimedia[4].height < 300) {
                  return;
                } else {
                  return <TopStoriesItem topStory={topStory} key={index} />;
                }
                
            });
        }
        else if (topStories){
           return <NoResult result="data"/>
        }
    }

    render(){
        return(
            <ul className="article-list">{this.renderTopStories(this.getData())}</ul>
        );
    }
}


function mapStateToProps({ topStories }){
    return { topStories };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators( { fetchTopStories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TopStoriesList);