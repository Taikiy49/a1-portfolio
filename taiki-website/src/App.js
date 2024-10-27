import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Projects from './Projects.jsx';
import Home from './Home.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Home/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
