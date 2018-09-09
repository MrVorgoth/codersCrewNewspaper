import React from "react";
import { Fragment } from "react";

export default props => {
  return (
    <Fragment>
      <li className="movie-item" key={props.index}>
        <h3 className="film-title">
          <strong>{props.title}</strong>
        </h3>
              <p><strong>Headline: </strong> {props.headline}</p>
              <p><strong>Summary: </strong>{props.summary}</p>
        <p>
          <strong>Author:</strong> {props.author}
        </p>
              <p><strong>Publictation date:</strong> {props.pubDate}</p>
        <a style={{fontSize: "1rem"}} className="article-link" href={props.url}><strong> {props.linkText}</strong> </a>
      </li>
      <hr className="article-hr" />
    </Fragment>
  );
};
