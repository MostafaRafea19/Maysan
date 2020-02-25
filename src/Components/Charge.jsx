import React from 'react';
import Header from './User_Dashboard/Common/Header';
import Saidebar from './User_Dashboard/Common/Sidebar'

class Charge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <section className="Charge">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <Saidebar />
                            </div>
                            <div className="col-9">
                                    <div>
                                        Hello This is Said bar
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Charge;