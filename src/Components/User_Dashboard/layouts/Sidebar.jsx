import React from 'react';
import Sh from '../../../img/icon/Sh.png'
import Xl from '../../../img/icon/x31 0.png'
import Xm from '../../../img/icon/x35.png'
import CC from '../../../img/icon/conversation.png'
import SS from '../../../img/icon/settings.png'

class Sidebar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="sidebar-user-D d-flex align-items-center w-auto">
                    <div className="content m-auto">
                        <div className="row justify-content-center align-items-center">
                            <div className="text-right">
                                <div className="col-12 link mt-2">

                                    <a href="#" className="d-inline active">
                                        <div className="icon d-inline ml-3">
                                            <img src={Sh} alt=""/>
                                        </div>
                                        منصة الشحن</a>

                                </div>
                                <div className="col-12 link">

                                    <a href="#" className="d-inline">
                                        <div className="icon d-inline ml-3">
                                            <img src={Xl} alt=""/>
                                        </div>
                                        البولصيات</a>

                                </div>
                                <div className="col-12 link ">

                                    <a href="#" className="d-inline client"> العملاء</a>

                                </div>
                                <div className="col-12 link">

                                    <a href="#" className="d-inline">
                                        <div className="icon d-inline ml-3">
                                            <img src={Xm} alt=""/>
                                        </div>
                                        الشحنات</a>

                                </div>
                                <div className="col-12 link">

                                    <a href="#" className="d-inline settings">المساعدة</a>

                                </div>
                                <div className="col-12 link">

                                    <a href="#" className="d-inline settings">الاعدادات</a>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Sidebar;