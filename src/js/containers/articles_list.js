import React, { Component } from "react";
import { connect } from "react-redux";

class ArticlesList extends Component {
  renderArticles() {

      const arr = this.props.articles[0];
      let articlesArr = arr;


    //if articles exists and articles list have more than 6 elements, take frist six elements to a new  array;
    if (articlesArr && articlesArr.length > 6) {
        articlesArr = articlesArr.slice(0, 6);
    }

    let url = "";

      if (articlesArr) {
          return articlesArr.map((article, key) => {
        if (article.multimedia[0]) {
            //if object conatin url, take base url and add rest of url from given object
          url = `https://static01.nyt.com/${article.multimedia[0].url}`;
          console.log(article.multimedia[0].url);
        } else {
            //if object doesn't contain url at all, set variable url to url below, wihich contains a 'no img' picture 
          url =
            "https://www.eu-rentals.com/sites/default/files/default_images/noImg_2.jpg";
        }

        return (
            <div>
                <li className="article-container" key={key}>
                    <div className="article-img">
                        <img src={url} alt="" />
                    </div>
                    <div className="article-details">
                        <span>
                            <strong>Header:</strong> {article.snippet}
                        </span>
                        <span>
                            <strong>Source:</strong> {article.source}
                        </span>
                        <span>
                            <strong>Pages:</strong> {article.print_page}
                        </span>
                        <span>
                            <a href={article.web_url} target="_blank">
                                Link to the article
                </a>
                        </span>
                    </div>
                </li>
                <hr/>
            </div>
         
        );
      });
    }
  }

  render() {
    return <ul>{this.renderArticles()}</ul>;
  }
}

function mapStateToProps({ articles }) {
  return { articles };
}

export default connect(mapStateToProps)(ArticlesList);
