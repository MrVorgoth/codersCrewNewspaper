import React from "react";
import { Fragment } from "react";

export default props => {
  return (
    <Fragment>
      <li className="movie-item">
        <h3 className="film-title">
          <strong>{props.title}</strong>
        </h3>

              <p><strong>Headline: </strong> {props.headline}</p>
              <p><strong>Summary: </strong>{props.summary}</p>

        <a className="article-link" href={props.url}>{props.linkText} </a>

        <p>
          <strong>Author:</strong> {props.author}
        </p>
              <p><strong>Publictation date:</strong> {props.pubDate}</p>
      </li>
      <hr className="article-hr" />
    </Fragment>
  );
};
