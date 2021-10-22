import React from 'react'
import './App.css';
import Home from './Component/Home';
import Login1 from './Component/Login1';
 import Regster from './Component/Regster';
 import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>      
    <div className="container">      
      <nav className="navbar navbar-expand-lg navheader">      
        <div className="collapse navbar-collapse" >      
          <ul className="navbar-nav mr-auto">  
          <li className="nav-item">      
              <Link to={'/Home'} className="nav-link">Home</Link>      
            </li>     
            <li className="nav-item">      
              <Link to={'/login'} className="nav-link">login</Link>      
            </li>    
            <li className="nav-item">      
              <Link to={'/Regster'} className="nav-link">Regster</Link>      
            </li>    
          </ul>      
        </div>      
      </nav> <br />      
      <Switch>   
         <Route path='/home' component={Home} />     
        <Route path='/login' component={Login1} />     
        <Route path='/Regster' component={Regster} />    
        <Route path='/Dashboard' component={Dashboard} />  
      </Switch>      
    </div>      
  </Router>
     
 
  );
}

export default App;
