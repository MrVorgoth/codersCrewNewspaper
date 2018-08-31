import React from 'react';

export default(props) =>{
    return (
        <div>
            <li className="article-container" key={props.index}>
          <div className="article-img">
            <img src={props.url} alt="" />
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
              <a className="article-link" href={props.article.web_url} target="_blank">
                Link to the article
              </a>
            </span>
          </div>
        </li>
        <hr className="article-hr" />
      </div>
    );
}