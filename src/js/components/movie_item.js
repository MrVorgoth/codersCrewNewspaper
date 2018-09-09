import React from "react";
import { Fragment } from "react";

export default props => {
  return (
    <Fragment>
      <li className="movie-item" key={props.index}>
        <h3 className="film-title">
          <strong>{props.movie.display_title}</strong>
        </h3>
        <p><strong>Headline: </strong> {props.movie.headline}</p>
        <p><strong>Summary: </strong>{props.movie.summary_short}</p>
        <p>
          <strong>Author:</strong> {props.movie.byline}
        </p>
        <p><strong>Publictation date:</strong> {props.movie.publication_date}</p>
        <a style={{ fontSize: "1rem" }} className="article-link" href={props.movie.link.url}><strong> {props.movie.link.suggested_link_text}</strong> </a>
      </li>
      <hr className="article-hr" />
    </Fragment>
  );
};
