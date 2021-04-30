
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Blog from './components/blog';
import Home from './components/home';
import Portfolio from './components/portfolio';
import PortfolioDetails from './components/portfolio-details'
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <div className="parent">
        <Header/>
          <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/works"><Portfolio/></Route>
            <Route exact path="/blog"><Blog/></Route>
            <Route exact path="/works/:workId" >
              <PortfolioDetails/>
            </Route>
          </Switch>
          <Footer/>  
        </div>
      </AnimatePresence>
    </Router>
  );
}


export default App;
