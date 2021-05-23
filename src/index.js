import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cursor from './components/cursor/cursor';
import CursorImg from './components/cursor.js'

ReactDOM.render(
  <Fragment>
      <App />
      <CursorImg/>
  </Fragment>
  ,
  document.getElementById('root')
);


