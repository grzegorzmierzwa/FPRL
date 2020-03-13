import React from 'react';

import Home from './Home';
import HomeEn from './HomeEn';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import styles from'./App.module.scss';

function App() {
  return (
    <div className={styles.App}>


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
