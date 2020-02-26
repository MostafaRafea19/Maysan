import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Components/Login';
<<<<<<< HEAD
// import Charge from './Components/Charge'
import Statistics from "./Components/Statistics";
=======
import Register from './Components/Register';
import Charge from './Components/Charge';
>>>>>>> be1dcdc59bac06da473a057d1418c2a1b5694191


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
<<<<<<< HEAD
          <Route path="/c">
            <Statistics />
=======
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/charge">
            <Charge />
>>>>>>> be1dcdc59bac06da473a057d1418c2a1b5694191
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
