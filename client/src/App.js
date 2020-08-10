import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/RegisterLogin'
import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
