import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cursor from './components/cursor/cursor';
import CircleType from 'circletype';

window.onload = () =>{
  const cursor = new Cursor(document.querySelector(".cursor"));
  const arctext = new CircleType(document.getElementById("getInTouch"));
  
}

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);


