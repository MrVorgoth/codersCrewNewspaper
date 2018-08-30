import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions/index";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: "Sport"};
        
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchArticles(this.state.term);
        /* this.setState({ term: "" }); */
    }
    onFormChange(event){

        this.setState({ term: event.target.value });
    }

    render(){
        return <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand article-link">Article browser</a>
            <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
                <input onChange={this.onFormChange.bind(this)} value={this.state.term} className="form-control mr-sm-2" type="search" placeholder="Sport" aria-label="Search" />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
          </nav>;
          
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchArticles}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);



{/* render(){
    return <form className="search-bar" onSubmit={this.onFormSubmit}>
        <input placeholder="Get a six articles based on type" type="text" />
        <button type="submit">Search</button>
    </form>;

}  */}
