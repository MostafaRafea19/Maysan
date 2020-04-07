import React from 'react'
import Sh from '../../../img/icon/Sh.png'
import Xl from '../../../img/icon/x31 0.png'
import Xm from '../../../img/icon/x35.png'
import CC from '../../../img/icon/conversation.png'
import SS from '../../../img/icon/settings.png'
import plus from "../../../img/icon/plus.svg";
import new_shipment from "../../../img/icon/new_shipment.svg";
import {Link} from "react-router-dom";

class Sidebar_R extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="sidebar-user-D d-flex align-items-center w-auto" style={{height: '100%'}}>
                    <div className="content m-auto" style={{height: '100%'}}>
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

                                <div className="col-12 link">
                                    <Link to="" className="nav-link d-flex align-items-center position-relative">
                                        <img src={plus} className="plus position-absolute"/>
                                        <img src={new_shipment} className="px-1"/>
                                        <span className="px-1 pt-1">شحنة جديدة</span>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Sidebar_R;