import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import LoginSignup from './Components/LoginSignp/LoginSignup';
import Home from './Components/Dashboard/Home';
import Dashboard from './Components/Dashboard/Dashboard';


function App() {
  return (
    
    <Router>
      <Routes>
      <Route path='/' Component={LoginSignup}></Route>
      <Route path='/Home' Component={Dashboard}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
