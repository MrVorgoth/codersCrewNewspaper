import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Board from "./components/board";
import reducers from "../js/reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Board />
  </Provider>,
  document.getElementById("react-root")
);
