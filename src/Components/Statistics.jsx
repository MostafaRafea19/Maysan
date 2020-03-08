import React from 'react';
import Sidebar from './User_Dashboard/Common/Sidebar'
import Navbar from "./User_Dashboard/Common/Navbar";
import Footer from "./User_Dashboard/Common/Footer";
import Graph from "./User_Dashboard/Common/Graph";

class Statistics extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className="statistics">
                    <Navbar />
                    <div className="container-fluid mt-5">
                        <div className="row mt-5">
                            <div className="col-3"></div>
                            <div className="col-9">
                                <h1 className="text-right text-black">
                                    منصة الشحن
                                </h1>
                            </div>

                            <div className="col-3 pl-0">
                                <Sidebar />
                            </div>
                            <div className="col-9  pr-0 section-L">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 pr-0 pl-3">
                                            <Graph graph={this.props.graph}/>
                                        </div>
                                        <div className="col-4 pl-0 pr-3">
                                            <div className="empty text-center bg-white ">
                                                <h5 className="h2">اعلان</h5>
                                            </div>
                                        </div>
                                        <div className="col-8 mt-5 pr-0">
                                            <div className="details px-3">
                                                <div className="row justify-content-center align-items-center ">

                                                    <div className="col-4 text-center ">
                                                        <div className="mt-4 ">
                                                            <h3 className="text-white text-light">رصيد الشحنات</h3>
                                                            <div className="text-white">
                                                                <span className="text-white h1 mt-2 d-inline">70</span>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center text-light">اشترك في احد الباقات الان</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <div className="mt-4">
                                                            <h3 className="text-white text-light">رصيدك الحالي</h3>
                                                            <div className="text-white ">
                                                                <span className="text-white h3 mt-2 d-inline">لا يوجد رصيد</span>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center mt-3 text-light">اشترك في احد الباقات الان</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <div className="mt-4">
                                                            <h3 className="text-white text-light">رصيدك الحالي</h3>
                                                            <div className="text-white">
                                                                <div className="text-white h1 mt-2 d-inline">300</div><div className="d-inline-block position-absolute mt-2 mr-2">ريال</div>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center text-light">إضافة رصيد</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-4 mt-5 pl-0 pr-3">
                                            <div className="bundles bg-purple p-3">
                                                <div className="bundle position-relative">

                                                    <div className="out pr-2 position-absolute text-right bg-orange">
                                                        <h5 className="text-white h3 text-center d-flex justify-content-center align-items-center pl-1 pt-2">قم بالترقية الان</h5>
                                                    </div>
                                                    <div className="position-absolute mt-2">
                                                        <h5 className="text-white text-right h2">الباقة الحالية</h5>
                                                        <h5 className="text-right primary-color h2">الباقة الحالية</h5>
                                                        <h5 className="text-right text-white h4">ادفع حسب استخدامك</h5>
                                                    </div>




                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-5">
                                <Footer/>
                            </div>

                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Statistics;