import React from "react";
import { Fragment } from "react";

export default props => {
  return (
    <Fragment>
      <li className="article-container" key={props.index}>
        <div className="article-img">
          <div className="link-wrapper">
            <figure>
              <img className="img" alt="" src={props.url} />
              <figcaption>
                <h3>Something</h3>
                <p>Something Something Something </p>
                <p>
                  <a href='' target="_blank">Something</a>
                </p>
              </figcaption>
            </figure>
          </div>
          
        </div>
        <div className="article-details">
          <span>
            <strong>Snippet:</strong> {props.article.snippet}
          </span>
          <span>
            <strong>Source:</strong> {props.article.source}
          </span>
          <span>
            <strong>Pages:</strong> {props.article.print_page}
          </span>
          <span>
            <a
              className="article-link"
              href={props.article.web_url}
              target="_blank"
            >
              Link to the article
            </a>
          </span>
        </div>
      </li>
      <hr className="article-hr" />
    </Fragment>
  );
};
