
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <Body/>
        <Footer/>
      </div>
      <div className="sidetext">Iskhak Asanov | Web & Mobile Software Developer</div>
    </div>
  );
}

export default App;
