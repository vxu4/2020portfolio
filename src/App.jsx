import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './App.scss';
import './styles/BootstrapCustom.scss';
import NotFound from './pages/Home';
import Home from './pages/Home';
import Art from './pages/Art_Overall';
import Film from './pages/Film_Overall';
import NavBar from './components/NavBar';

const RedirectToNotFound = () => <Redirect to="/404" />;

const App = () => (
  <BrowserRouter>
    <NavBar />
    <div className="App w-100 h-100 d-flex flex-column">
      <Switch>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Art" component={Art} />
        <Route exact path="/Film" component={Film} />
        <Route component={RedirectToNotFound} />
      </Switch>
    </div>
  </BrowserRouter> 
);

export default App;
