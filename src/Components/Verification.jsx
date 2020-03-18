import React from 'react';
import Header from './User_Dashboard/Common/Header';
import Design from './User_Dashboard/Common/Design';
import Verification_Form from './User_Dashboard/Common/Verification_Form';
import Footer from './User_Dashboard/Common/Footer';

class Verification extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header />
                                <Verification_Form
                                    phone_number={this.props.phone_number}
                                    inputs={this.props.inputs}
                                    handleVerificationCodeChange={this.props.handleVerificationCodeChange}
                                    handleVerificationCodeSubmit={this.props.handleVerificationCodeSubmit}
                                />
                                <div className="pt-5">
                                    <Footer />
                                </div>
                            </div>
                        </div>
                        <div className="design col-3 d-none d-lg-block"></div>
                        <Design />
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Verification;