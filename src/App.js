
import React, {useState, Suspense} from 'react';
import Intro from './components/intro';
import Footer from './components/footer';

import ArcText from 'arc-text';
import CircleType from 'circletype';
import Blog from './components/blog';
import './App.scss';
const Profile = React.lazy(()=>import('./components/profile'));
const Portfolio = React.lazy(()=>import('./components/portfolio'));
const Home = React.lazy(()=>import('./components/home') )




function App() {
  
  const [state, setState] = useState(0);
  
  var lst = ["i-profile", "i-portfolio", "i-blog", "i-home"]

  function handleChange(st){
    if (state===st){
      setState(0);
      document.getElementById(lst[st-1]).classList.remove("active");
    }
    else {
      setState(st);
      document.getElementById(lst[st-1]).classList.add("active");
      for(var i=0; i<lst.length; i++){
        if (i!==st-1) document.getElementById(lst[i]).classList.remove("active");
      }
    }
  }
  
  return (
    <>
    <div className="parent">
      <div className="div1 ">
        <div className="cursor-item-link header">
        <hr className="vertical-line"></hr>
          <ul>
            <li
              id="i-profile"
              onClick={() => {
                handleChange(1);
              }}
            >
              cv
            </li>
            <li
              id="i-portfolio"
              onClick={() => {
                handleChange(2);
              }}
            >
              blog
            </li>
            <li
              id="i-blog"
              onClick={() => {
                handleChange(3);
              }}
            >
              works
            </li>
            <li
              id="i-home"
              onClick={() => {
                handleChange(4);
              }}
            >
              home
            </li>
          </ul>
          
        </div>
      </div>

      <div className="div2">
        <div className="main-content">
          <div className="cursor-item title">ISKHAK ASANOV</div>
          <div className="cursor-item title2">
            BEGINNING WEB
            DEVELOPER BASED
            IN ULSAN, SK
          </div>
        </div>
      </div>
      
      <div className="div3">
        <div className="footer">
        <hr className="horizontal-line"></hr>
          <ul className="cursor-item-link">
            <li>github</li>
            <li>linkedin</li>
            <li>telegram</li>
            <li>facebook</li>
            <li>twitter</li>
          </ul>
        </div>
      </div>
      
      <div className="div4">
      <h3 id="getInTouch" className="git cursor-item-link" >ET IN TOUCH - G</h3>
      </div>
      <div className="div7"></div>
      
      {/* <div className="box header">
            <ul>
              
              <li className="i-profile" id="i-profile" onClick={()=>{handleChange(1)}}>PROFILE</li>
              
              <li className="i-portfolio" id="i-portfolio" onClick={()=>{handleChange(2)}}>PORTFOLIO</li>
              <li className="i-blog" id="i-blog" onClick={()=>{handleChange(3)}}>BLOG</li>
              <li className="i-home" id="i-home" onClick={()=>{handleChange(4)}}>HOME</li>
            </ul>      
        </div> */}
      {/* {(!state && <Intro/>)}
        {state===1 &&
          <Suspense fallback={<h3>Loading....</h3>}>

            
            <Profile/>
          </Suspense>}

        {state===2 &&
          <Suspense fallback={<h3>Loading....</h3>}>
            <Portfolio/>
          </Suspense>}
        {state===3 &&
          <Suspense fallback={<h3>Loading....</h3>}>
            <Blog/>
          </Suspense>}
          {state===4 &&
          <Suspense fallback={<h3>Loading....</h3>}>
            <Home/>
          </Suspense>} */}
      {/* <Footer/>
      </div>
      <div className="sidetext">💻 Iskhak Asanov | Web & Mobile Software Developer</div> */}
    </div>
    <div className="cursor">
          <div className="cursor-media">
          <svg height="100" width="100">
              <circle cx="50" cy="50" r="40" stroke-width="3" fill="#000000" opacity="0.85"/>
          </svg>
          </div>
      </div>
    </>
  );
}

export default App;
