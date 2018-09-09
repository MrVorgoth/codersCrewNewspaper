import React from "react";
import { Fragment } from "react";

export default props => {
  return <Fragment>
      <li className="article-container" key={props.index}>
        <div className="article-img">
          <div className="link-wrapper">
            <figure>
              <img className="img" alt="" src={props.url} />
              <figcaption>
                <h3>{props.article.type_of_material}</h3>
                <p>{props.article.byline.original}</p>
                <p>
                <a href={props.article.web_url} target="_blank">
                  Read More
                  </a>
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="article-details">
          <span>
            <h3>{props.article.headline.print_headline}</h3>
          </span>
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
            <strong>Date of publication: </strong> {props.article.pub_date.slice(0, 10)}
          </span>
          
        </div>
      </li>
      <hr className="article-hr" />
    </Fragment>;
};
