import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArticles } from "../actions";
import { Link } from "react-router-dom";
import Sticky from 'react-stickynode';


export function onClicked(e) {
    e.preventDefault();
    document.getElementsByClassName("dropdown")[0].classList.toggle("down");
    document.getElementsByClassName("arrow")[0].classList.toggle("gone");
    if (
        document.getElementsByClassName("dropdown")[0].classList.contains("down")
    ) {
        setTimeout(function () {
            document.getElementsByClassName("dropdown")[0].style.overflow = "visible";
        }, 100);
    } else {
        document.getElementsByClassName("dropdown")[0].style.overflow = "hidden";
    }
}





class ArticleSearchBar extends Component {




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




    /* <nav className="navbar navbar-light bg-light"></nav> */
    render() {
        return <Sticky>
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
                    <div className="drop-title" >
                        Article API <span className="fa fa-bars spa" />
                        <div className="arrow" />
                    </div>
                    <div className="dropdown">
                        <Link className="drop-link" to="/movie-search">
                            <p className="drop-item">
                                Movie API
              </p>
                        </Link>
                    </div>
                </div>

                <form onSubmit={this.onFormSubmit.bind(this)} className="form-inline">
                    <input onChange={this.onFormChange.bind(this)} value={this.state.term} className="form-control mr-sm-2" type="search" placeholder="Sport" aria-label="Search" />
                    <button className="btn btn-default bouncy" type="submit">
                        Search
            </button>
                </form>
            </nav>
        </Sticky>;

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchArticles }, dispatch);
}

export default connect(null, mapDispatchToProps)(ArticleSearchBar);



