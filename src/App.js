import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Stories from './Stories';
import Suggestions from './Suggestions';
import Direct from './Direct';

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/direct">
            <Direct />
          </Route>
          <Route path="/" >
            
            <div className="app__content">
              <Stories />
              <Suggestions />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
