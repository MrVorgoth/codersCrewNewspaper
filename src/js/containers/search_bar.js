import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions/index";
import { Link } from "react-router-dom";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: "Sport"};
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchArticles(this.state.term);
    }
    onFormChange(event){
        this.setState({ term: event.target.value });
    }

    render(){
        return <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand article-link">Home</Link>
            <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
                <input onChange={this.onFormChange.bind(this)} value={this.state.term} className="form-control mr-sm-2" type="search" placeholder="Sport" aria-label="Search" />
                <button className="btn btn-outline-dark bouncy" type="submit">
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

