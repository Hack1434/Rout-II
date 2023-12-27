import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RestrictedRoute from './Components/RestrictedRoute';
import Profile from './Components/Profile';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    


    <Router>
    <div className="App">
    <Navbar />
      <Switch>
        {/* PrivateRoute requires the 'component' prop, not a child */}
        <PrivateRoute path="/profile" component={Profile } />
        
        {/* RestrictedRoute requires the 'component' prop, not a child */}
        <RestrictedRoute path="/login" component={Login } />
        <RestrictedRoute path="/signup" component={Signup } />
        
        {/* The general landing page should come last */}
        <Route path="/" exact component={Home } />
      </Switch>
      </div>
    </Router>
  );
}

export default App;

