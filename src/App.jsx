import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Components/Login';
// import Charge from './Components/Charge'
import Statistics from "./Components/Statistics";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/c">
            <Statistics />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
