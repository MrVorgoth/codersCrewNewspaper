import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducers from "../js/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";


import Board from "./components/board";
import ArticleBrowser from './components/article_browser';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
      <Switch>
          <Route path="/articles" component={ArticleBrowser}/>
        <Route path="/" component={Board}/>
      </Switch>
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("react-root")
);
