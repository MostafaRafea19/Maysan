import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Components/Login';
// import Charge from './Components/Charge'
import Statistics from "./Components/Statistics";
import Register from './Components/Register';
import Shipments from "./Components/Shipments";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/statistics">
                <Statistics />
            </Route>
          <Route path="/register">
            <Register />
          </Route>
            <Route path="/sh">
                <Shipments />
            </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
