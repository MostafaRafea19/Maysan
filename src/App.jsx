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

import  axios from 'axios';



class App extends React.Component {

  state = {
    register_inputs: {
      'name': '',
      'surname': '',
      'email': '',
      'mobile': '',
      'password': '',
      'password_confirmation': ''
    },
    phone_number: '0501234567',
    verification_code: {
     'n1' : '',
     'n2' : '',
     'n3' : '',
     'n4' : ''
    }
    ,
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
    ],
    Feedback: [
      {
        'name': 'تركي',
        'feedback': 'مررة ممتازين وسريعين شكرا لكم'
      },
      {
        'name': 'عبدالله',
        'feedback': 'جربتكم أول مرة وما عجبتني الخدمة بس لما تواصلت معهم ما تركوني الا وانا راضي شكراً لكم'
      },
      {
        'name': 'فارس',
        'feedback': 'شكرا لكم الان صرت اقدر اوفر لعملائي شحن اسرع'
      },
      {
        'name': 'نوره',
        'feedback': 'الله يسعدكم اسعاركم تفرق والجودة بعد'
      }
    ],
    notifications_counter: 5,
    graph: [
      {
        purple: "50%",
        orange: "20%",
      },
      {
        purple: "30%",
        orange: "40%",
      },
      {
        purple: "70%",
        orange: "60%",
      },
      {
        purple: "40%",
        orange: "30%",
      },
      {
        purple: "80%",
        orange: "20%",
      },
      {
        purple: "50%",
        orange: "20%",
      },
      {
        purple: "50%",
        orange: "10%",
      },
      {
        purple: "90%",
        orange: "10%",
      }
    ]
  };

  handleRegisterFormChange = (e) => {
    this.setState({
      register_inputs: {
        ...this.state.register_inputs,
        [e.target.name]: e.target.value
      }
    })
  };

  handleRegisterFormSubmit = (e) => {
    e.preventDefault();


    const data = this.state.register_inputs;

    axios.post(`http://127.0.0.1:8000/api/register`, data)
        .then(res => {
          const token = res.data.token;
          console.log(res);
        })
  };

  handleVerificationCodeChange = (e, index) => {
    this.setState({
      verification_code: {
        ...this.state.verification_code,
        [e.target.name]: e.target.value
      }
    });

    let i = index + 1;
    if (i <= 3) {
      this.state.vc_inputs[i].current.focus();
    }
  };

  handleVerificationCodeSubmit = (e) => {
    e.preventDefault();

    let code = '';
    for (let i=1; i>5; i++) {
      code = code + this.state.verification_code[i];
    }

    axios.post(`http://127.0.0.1:8000/api/verify`, {code})
        .then(res => {
          console.log(res);
        })
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/statistics">
            <Statistics
              notifications_counter={this.state.notifications_counter}
              graph={this.state.graph}
            />
          </Route>
          <Route path="/register">
            <Register
                handleRegisterFormChange={this.handleRegisterFormChange}
                handleRegisterFormSubmit={this.handleRegisterFormSubmit}
            />
          </Route>
          <Route path="/shipments">
            <Shipments />
          </Route>
          <Route path="/verify">
            <Verification
              phone_number={this.state.phone_number}
              inputs={this.state.vc_inputs}
              handleVerificationCodeChange={this.handleVerificationCodeChange}
              handleVerificationCodeSubmit={this.handleVerificationCodeSubmit}
            />
          </Route>
          <Route path="/sent-shipments">
            <Sent_Shipments
              sent_shipments={this.state.sent_shipments}
            />
          </Route>
          <Route path="/">
            <Landing_Page feedback={this.state.Feedback} handle={this.handle}/>
          </Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
