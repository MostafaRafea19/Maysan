import React from 'react';
import Header from './User_Dashboard/Common/Header';
import Design from './User_Dashboard/Common/Design';
import Form from './User_Dashboard/Common/_Form';

class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-lg-9 col-12 position-relative">
                            <div className="container">
                                <Header />
                                <Form />
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

export default Login;