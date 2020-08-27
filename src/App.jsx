import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.css';
import NotFound from './pages/Home';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const RedirectToNotFound = () => <Redirect to="/404" />;

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div className="App w-100 h-100 d-flex flex-column">
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Route component={RedirectToNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
