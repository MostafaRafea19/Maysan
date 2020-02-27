import React from 'react';
import Saidebar from './User_Dashboard/Common/Sidebar'
import Navbar from "./User_Dashboard/Common/Navbar";
import Footer from "./User_Dashboard/Common/Footer";

class Statistics extends React.Component{
    render(){
        return(
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

                            <div className="col-3">
                                <Saidebar />
                            </div>
                            <div className="col-9   section-L">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-8 bg-danger">
                                        </div>
                                        <div className="col-4 ">
                                            <div className="empty text-center bg-white ">
                                                <h5 className="h2">اعلان</h5>
                                            </div>
                                        </div>
                                        <div className="col-8 mt-5">
                                            <div className="details">
                                                <div className="row justify-content-center align-items-center">

                                                    <div className="col-4 text-center ">
                                                        <div className="mt-4 ">
                                                            <h3 className="text-white">رصيد الشحنات</h3>
                                                            <div className="text-white">
                                                                <span className="text-white h1 mt-2 d-inline">70</span>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center">اشترك في احد الباقات التالية</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-4 text-center">
                                                            <h3 className="text-white">رصيدك الحالي</h3>
                                                            <div className="text-white ">
                                                                <span className="text-white h3 mt-2 d-inline">لا يوجد رصيد</span>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center mt-3">اشترك في احد الباقات التالية</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 text-center">
                                                        <div className="mt-4">
                                                            <h3 className="text-white">رصيدك الحالي</h3>
                                                            <div className="text-white">
                                                                <span className="text-white h1 mt-2 d-inline">300</span><span>ريال</span>
                                                                <div className="d-block">
                                                                    <a href="#" className="add-C d-inline-block text-white text-center">إضافة رصيد</a>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-4 mt-5">
                                            <div className="bundles bg-purple p-3">
                                                <div className="bundle position-relative">

                                                    <div className="out pr-2 position-absolute text-right bg-orange">
                                                        <h5 className="text-white pt-1 h3 text-center">قم بالترقية الان</h5>
                                                    </div>

                                                    <h5 className="text-white text-right h2">الباقة الحالية</h5>
                                                    <h5 className="text-right primary-color h2">الباقة الحالية</h5>
                                                    <h5 className="text-right text-white h4">ادفع حسب استخدامك</h5>

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