import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import CreateContact from './components/add';
import ShowContact from './components/show';
import ParticularContact from './components/particular';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
               <h2>Welcome to Contact Book</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/add'}>Add</Link></li>
                  <li><Link to={'/show'}>Show</Link></li>
               </ul>
               <hr />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/add' component={CreateContact} />
                  <Route exact path='/show' component={ShowContact} />
                  <Route exact path='/particular/:id' component={ParticularContact} />
               </Switch>
            </div>
         </Router>
    );
  }
}

export default App;
