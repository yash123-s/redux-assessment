import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
// import { Router, Route } from 'react-router';


function App() {
  return (
    <div className="App">
     {/* <Router>  
      <switch> 
         <Route exact path='/' component={Login}></Route>
         </switch>
        </Router> */}
      <Login />
    </div>
  );
}

export default App;
