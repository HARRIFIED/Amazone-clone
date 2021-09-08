//dependencies
import React from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar  } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';

//stylings`
import './index.css'; 

//module
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

//Context api =>> provider
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

library.add(fab, faStar);

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>  
        <Router>
          <Switch>
            <Route path="/checkout">
              <Header /> 
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>login page</h1>
            </Route>
            <Route path="/">
              <Header /> 
              <Home />
            </Route>
          </Switch>
        </Router>
    </StateProvider>  
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
