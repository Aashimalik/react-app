import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CreateContact from './components/add';
import ShowContact from './components/show';
import ParticularContact from './components/particular';
import Counter from './components/counter';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Home from './components/home';
import xyz from './components/temp';
import PrivateRoute from './components/PrivateRoute';
import login from './components/login';
import   Signup  from './components/Signup';

import React from 'react';

export const Routers = props => {
    const { history } = props;
    
    return (
        
         <Router history={history}>
         <div>
         <Header/>
         
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/login' component={login} />
                     <Route exact path='/signup' component={Signup} />
                     <PrivateRoute exact path='/add' component={CreateContact} />
                     <PrivateRoute exact path='/edit/:id' component={CreateContact} />
                     <PrivateRoute exact path='/delete/:id' component={CreateContact} />
                     <PrivateRoute exact path='/show' component={ShowContact} />
                     <PrivateRoute exact path='/particular/:id' component={ParticularContact} />
                     <PrivateRoute exact path='/counter' component={Counter} />
                     <PrivateRoute exact path='/xyz' component={xyz} />
                     <PrivateRoute  component={NotFound} />
                  </Switch>
                  </div>
            </Router>
       
       );
}

