
import {useState} from 'react';
import Intro from './components/intro';
import Footer from './components/footer';
import Portfolio from './components/portfolio';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [portfolio, setPortfolio] = useState(false);
  return (
    <div>
      <div className="wrapper">
        <div className="box header">
            <ul>
                <li className="i-portfolio"><a href="#" onClick={()=>{setPortfolio(!portfolio)}}>PORTFOLIO</a></li>
                <li className="i-profile"><a href="/">PROFILE</a></li>
                <li className="i-contact"><a href="mailto:iskhak@iskhakasan.tech">CONTACT</a></li>
            </ul>      
        </div>
        {!portfolio && <Intro/>}
        {portfolio && <Portfolio/>}
        <Footer/>
      </div>
      <div className="sidetext">Iskhak Asanov | Web & Mobile Software Developer</div>
    </div>
  );
}

export default App;
