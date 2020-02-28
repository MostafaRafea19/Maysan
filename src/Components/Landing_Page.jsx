import React from 'react';
import Header from "./Landing_Page/Header";
<<<<<<< HEAD
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import Information from "./Landing_Page/Information";
import Express from "./Landing_Page/Express";
=======
import Benefit from './Landing_Page/Benefit';
import Feedback from './Landing_Page/Feedback';
>>>>>>> 865a8b6c05bfaed52ca6f7c09783dbbf4a676e2c

class Landing_Page extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="landing-page">
                    <div className="container-fluid">
                        <div className="row">
<<<<<<< HEAD
                            <div className="col-12 p-0">
                                <Navbar />
                            </div>
                            <div className="col-12 p-0 mt-5">
                                <Header />
                            </div>
                            <div className="col-12 mb-5">
                                <Information />
                            </div>
                            <div className="col-12 mt-5 p-0">
                                <Express />
                            </div>
                            <div className="col-12 p-0 mt-5 pt-5">
                                <Footer />
                            </div>

=======
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <Benefit />
                            </div>
                            <div className="col-12">
                                <Feedback />
                            </div>
>>>>>>> 865a8b6c05bfaed52ca6f7c09783dbbf4a676e2c
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Landing_Page;