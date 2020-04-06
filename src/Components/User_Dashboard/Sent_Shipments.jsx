import React from 'react';
import Navbar from './layouts/Navbar';
import Sidebar_ from './layouts/Sidebar';
import Table from './Sent_Shipments_Table';
import Sidebar from 'react-sidebar';

class Sent_Shipments extends React.Component {

    state = {
        sidebarOpen: true
    };

    onSetSidebarOpen = (open) => {
        this.setState({sidebarOpen: open});
    }

    render() {
        return (
            <React.Fragment>
                <section className="sent_shipments">
                    <Navbar/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mx-3 col-2"></div>
                            <h1 className="text-right mx-5 my-5 px-3">الشحنات المرسلة</h1>
                        </div>
                        <div className="row justify-content-around">
                            <div className="">
                                <Sidebar_/>
                                <Sidebar
                                    sidebar={<Sidebar_/>}
                                    open={this.state.sidebarOpen}
                                    onSetOpen={this.onSetSidebarOpen}
                                    styles={{sidebar: {background: "white"}}}
                                    pullRight={true}
                                >
                                    <button onClick={() => this.onSetSidebarOpen(true)}>
                                        Open sidebar
                                    </button>
                                </Sidebar>
                            </div>
                            <div className="col-9 px-0">
                                <Table sent_shipments={this.props.sent_shipments}/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Sent_Shipments;