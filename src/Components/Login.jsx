import React from 'react';
import Header from './User_Dashboard/Common/Header';
class Login extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="container-fluid">
                    <section className="row">
                        <section className="user col-8">
                            <section className="container">
                                <Header />
                            </section>
                        </section>
                        <section className="design col-4">

                        </section>
                    </section>
                </section>

            </React.Fragment>
        )
    }
}

export default Login;