import React from "react";
import { Fragment } from "react";

export default props => {
  return (
    <Fragment>
      <li className="movie-item" key={props.index}>
        <h3 className="film-title">
          <strong>{props.movie.display_title}</strong>
        </h3>
        <h4><strong>{props.movie.headline}</strong></h4>
        <p>{props.movie.summary_short}</p>
        <p>
          <strong>Author:</strong> {props.movie.byline}
        </p>
        <p><strong>Date of publication: </strong> {props.movie.publication_date}</p>
        <a style={{ fontSize: "1rem" }} className="article-link" href={props.movie.link.url}><strong> {props.movie.link.suggested_link_text}</strong> </a>
      </li>
      <hr className="article-hr" />
    </Fragment>
  );
};
