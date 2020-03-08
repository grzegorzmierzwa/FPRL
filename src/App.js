import React from 'react';

import Home from './Home';
import HomeEn from './HomeEn';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='App'>


      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/en' component={HomeEn} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
