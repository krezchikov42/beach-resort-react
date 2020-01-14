import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, S, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:rid' component={SingleRoom} />
        <Route component={Error}></Route>
      </Switch>
    </Router>
  );
}

export default App;
