import React from 'react';
import Header from './User_Dashboard/Common/Header';
import Design from './User_Dashboard/Common/Design';
import Resend_Form from './User_Dashboard/Common/Resend_Form';
import Footer from './User_Dashboard/Common/Footer';

class Verification extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header/>
                                <Resend_Form
                                    mobile={this.props.mobile}
                                    error={this.props.error}
                                    handleUserResendChange={this.props.handleUserResendChange}
                                    handleUserResendSubmit={this.props.handleUserResendSubmit}
                                />
                                <div className="pt-5">
                                    <Footer/>
                                </div>
                            </div>
                        </div>
                        <div className="design col-3 d-none d-lg-block"></div>
                        <Design/>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Verification;