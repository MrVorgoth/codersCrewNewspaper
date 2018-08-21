import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Board from './components/board';

ReactDOM.render(
  <Board />, document.getElementById('react-root')
);