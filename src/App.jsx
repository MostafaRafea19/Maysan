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
import Verification from './Components/Verification';


class App extends React.Component {

  state = {
    phone_number: '0501234567',
    verification_code: '',
    vc_inputs: [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef()
    ],
    input: React.createRef()
  }

  handleVerificationCodeChange = (e, index) => {
    const code = e.target.value;
    this.setState({
      verification_code: code
    });

    let i = index + 1;
    if (i <= 3) {
      this.state.vc_inputs[i].current.focus();
    }
  }

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
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/verification">
            <Verification
              phone_number={this.state.phone_number}
              inputs={this.state.vc_inputs}
              handleVerificationCodeChange={this.handleVerificationCodeChange}
            />
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
