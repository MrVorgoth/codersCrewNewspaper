import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleItem from "../components/article_item";
import NoArticle from "../components/no_article";
import { bindActionCreators } from "redux";
import { fetchArticles } from "../actions/index";

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchArticles("Sport");
    this.renderArticles(this.getData());
  }

  getData() {
    let data = this.props.articles[0];

    if (data && data.length > 6) {
      data = data.splice(0, 6);
    }
    return data;
  }

  renderArticles(articles) {
    let url = "";

    if (articles && articles.length > 0) {
      return articles.map((article, index) => {
        if (article.multimedia[0]) {
          url = `https://static01.nyt.com/${article.multimedia[0].url}`;
        } else {
          url =
            "https://www.eu-rentals.com/sites/default/files/default_images/noImg_2.jpg";
        }

        return <ArticleItem article={article} key={index} url={url} />;
      });
    } else if (articles) {
      return <NoArticle />;
    } /*  */
  }

  render() {
    return (
      <ul className="article-list">{this.renderArticles(this.getData())}</ul>
    );
  }
}

function mapStateToProps({ articles }) {
  return { articles };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArticles }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesList);
