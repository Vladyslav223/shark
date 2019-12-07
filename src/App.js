import React from 'react';

import {
  HashRouter, Route, Switch, NavLink,
} from 'react-router-dom';

import Contacts from  './components/Contacts/Contacts';
import HomePage from  './components/HomePage/HomePage';
import './App.css';

const App = () => (
  <HashRouter>
    <div className="app">
      <nav>
      <NavLink className="nav-link" to="/">Главная</NavLink>
      <NavLink className="nav-link" exact to="/contacts">Контакты</NavLink>
      <NavLink className="nav-link" exact to="/profile">Профиль</NavLink>
      <NavLink className="nav-link" exact to="/autorise">Форма</NavLink>
      </nav>
     </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contacts" component={Contacts} />
      </Switch> 
  </HashRouter>
);

export default App;
