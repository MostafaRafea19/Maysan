import React from 'react';
import Navbar from './User_Dashboard/Common/Navbar';
import Sidebar from './User_Dashboard/Common/Sidebar';
import Table from './User_Dashboard/Sent_Shipments_Table';

class Sent_Shipments extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="sent_shipments">
                    <Navbar />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3"></div>
                            <h1 className="text-right my-5 px-3">الشحنات المرسلة</h1>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <Sidebar />
                            </div>
                            <div className="col-9">
                                <Table sent_shipments={this.props.sent_shipments} />
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Sent_Shipments;