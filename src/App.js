import React from 'react';

import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';

import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <nav>
      <Route className="nav-link" exact to="/">Главная</Route>
      <Route className="nav-link" exact to="/contacts">Контакты</Route>
      <Route className="nav-link" exact to="/profile">Профиль</Route>
      <Route className="nav-link" exact to="/autorise">Форма</Route>
      </nav>
     </div>
     {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/tabs/:tabId?" component={TabsPage} />
      </Switch> */}
  </HashRouter>
);

export default App;
