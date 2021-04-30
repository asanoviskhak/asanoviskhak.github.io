
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Blog from './components/blog';
import Home from './components/home';
import Portfolio from './components/portfolio';

import './App.scss';
import {HashRouter, Switch, Route} from 'react-router-dom'

function App() {
    
  return (
    <HashRouter>
      <div className="parent">
      <Header/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/works"><Portfolio/></Route>
          <Route path="/blog"><Blog/></Route>
        </Switch>
        <Footer/>  
      </div>
    </HashRouter>
  );
}

export default App;
