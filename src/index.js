import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cursor from './components/cursor/cursor';
import CursorImg from './components/cursor.js'

ReactDOM.render(
  <React.StrictMode>
      <App />
      <CursorImg/>
  </React.StrictMode>,
  document.getElementById('root')
);


