import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Projects from './Projects.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
