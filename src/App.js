import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home';
import CreateContact from './components/add';
import ShowContact from './components/show';
import ParticularContact from './components/particular';
import Counter from './components/counter';
import NotFound from './components/NotFound';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
     <div>
      <Header />
      <Router>
            <div>
              
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/add' component={CreateContact} />
                  <Route exact path='/edit/:id' component={CreateContact} />
                  <Route exact path='/delete/:id' component={CreateContact} />
                  <Route exact path='/show' component={ShowContact} />
                  <Route exact path='/particular/:id' component={ParticularContact} />
                  <Route exact path='/counter' component={Counter} />
                  <Route  component={NotFound} />
               </Switch>
            </div>
         </Router>
         </div>
    );
  }
}

export default App;
