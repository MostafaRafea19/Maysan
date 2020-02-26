import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login';
import Charge from './Components/Charge'


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/charge">
            <Charge />
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
