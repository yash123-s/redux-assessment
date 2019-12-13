import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router,Redirect, Route, Switch,} from 'react-router-dom';
import Register from './Components/Register';
import ReactApp from './Components/ReactApp';
import User from './Components/User';


function App() {
  return (
    <div className="App">
     <Router>  
      <Switch> 
         <Route exact path='/' component={Login}></Route>
         <Route exact path='/reg' component={Register}></Route>
         <Route exact path='/reactApp' component={ReactApp}></Route>
          <Route exact path='/user' component={User}></Route>
         </Switch>
        </Router>
      
    </div>
  );
}

export default App;