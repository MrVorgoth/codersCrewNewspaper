import React from "react";
import { Fragment } from "react";

export default props=>{
    

    return <Fragment>
        <li className="article-container">
          <div className="article-img">
            <div className="link-wrapper">
              <figure>
                <img className="img" alt="" src={props.topStory.multimedia[4].url} />
                <figcaption>
                  <h3>{props.topStory.section}</h3>
                  <p>
                   {props.topStory.multimedia[4].copyright}
                  </p>

                  <p>
                    <a href={props.topStory.url} target="_blank">
                      Read More
                    </a>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="article-details">
            <span>
            <h3>{props.topStory.title}</h3>
              
            </span>
            <span>
              <strong>Abstract: </strong>
              {props.topStory.abstract}
            </span>
            <span>
              <strong>Author: </strong>
              {props.topStory.byline}
            </span>
            <span>
              <strong>Date of publication: </strong>
              {props.topStory.published_date.slice(0, 10)}
            </span>
            <span />
          </div>
        </li>
        <hr className="article-hr" />
      </Fragment>;

}