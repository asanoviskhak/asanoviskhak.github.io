
import React, {useState, Suspense} from 'react';
import Intro from './components/intro';
import Footer from './components/footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
const Profile = React.lazy(()=>import('./components/profile'));
const Portfolio = React.lazy(()=>import('./components/portfolio'));



function App() {
  const [state, setState] = useState(0);

  var lst = ["i-profile", "i-portfolio", "i-blog"]

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
    <div>
      <div className="wrapper">
        <div className="box header">
            <ul>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li className="i-profile" id="i-profile" onClick={()=>{handleChange(1)}}>PROFILE</li>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li className="i-portfolio" id="i-portfolio" onClick={()=>{handleChange(2)}}>PORTFOLIO</li>
              <li className="i-contact" id="i-blog"><a href="/">BLOG</a></li>
            </ul>      
        </div>
        {(!state && <Intro/>)}
        {state===1 &&
          <Suspense fallback={<div>Loading...</div>}>
            <Profile/>
          </Suspense>}
        {state===2 &&
          <Suspense fallback={<div>Loading...</div>}>
            <Portfolio/>
          </Suspense>}
        <Footer/>
      </div>
      <div className="sidetext">💻 Iskhak Asanov | Web & Mobile Software Developer</div>
    </div>
  );
}

export default App;
