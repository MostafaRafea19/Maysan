import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './Components/Login';
import Statistics from "./Components/Statistics";
import Register from './Components/Register';
import Shipments from "./Components/Shipments";
import Verification from './Components/Verification';
import Sent_Shipments from './Components/Sent_Shipments';
import Landing_Page from './Components/Landing_Page';
import ReactDOM from 'react-dom'
import ReactWOW from 'react-wow'



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
    sent_shipments: [
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      },
      {
        'shipment_number': 6541981,
        'sent_date': '2020/20/22',
        'shipper_data': 'محمد عبدالله',
        'recipient_data': 'احمد سعيد',
        'recipient_address': 'حي، شارع، مبنى',
        'shipment_content': 'صندوق',
        'shipment_status': 'خرجت للتوصيل'
      }
    ]
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
            <Route path="/statistics">
                <Statistics />
            </Route>
          <Route path="/register">
            <Register />
          </Route>
            <Route path="/sh">
                <Shipments />
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
          <Route path="/sent-shipments">
            <Sent_Shipments
              sent_shipments={this.state.sent_shipments}
            />
          </Route>
          <Route path="/">
            <Landing_Page />
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
