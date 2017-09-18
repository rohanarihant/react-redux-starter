import React, { Component } from 'react';
import './App.css';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import Register from './components/register';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Router history={ browserHistory}>
        <Route path="/" component={Register}>
          <IndexRoute component={Register} />
        </Route>
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
