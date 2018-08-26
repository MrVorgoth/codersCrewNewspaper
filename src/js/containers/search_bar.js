import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions/index";

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: "Sport"};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFormChange = this.onFormChange.bind(this);
        
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchArticles(this.state.term);
        this.setState({ term: "Sport" });
    }
    onFormChange(event){

        this.setState({ term: event.target.value });
    }

    render(){
        return <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand">Articles browser</a>
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <input onChange={this.onFormChange} value={this.state.term} className="form-control mr-sm-2" type="search" placeholder="Sport" aria-label="Search" />
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
