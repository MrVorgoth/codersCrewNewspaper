import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import reducers from "../js/reducers";

import HomePage from "./components/home_page";
import ArticleBrowser from "./components/article_browser";
import MovieBrowser from "./components/movie_browser";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/article-search" component={ArticleBrowser} />
          <Route path="/movie-search" component={MovieBrowser} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-root")
);
