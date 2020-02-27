import React from 'react';
import Header from "./Landing_Page/Header";
import Benefit from './Landing_Page/Benefit';

class Landing_Page extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="landing-page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <Benefit />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Landing_Page;