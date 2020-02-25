import React from 'react';
import Header from './User_Dashboard/Common/Header';
import Design from './User_Dashboard/Common/Design';

class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid login">
                    <div className="row position-relative">
                        <div className="user col-9">
                            <div className="container">
                                <Header />
                            </div>
                        </div>
                        <div className="design col-3"></div>
                        <Design />
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Login;