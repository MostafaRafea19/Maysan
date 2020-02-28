import React from "react";
import img from "../../img/Firefox - Mac & Windows 1.png";
import icon from '../../img/Landing_Page/orange_circle.png';

class Shipping extends React.Component {


    render() {
        return (
            <React.Fragment>
                <section className="shipping">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12">
                                <h2 className="text-purple text-center">
                                    طريقة شحن جديدة كلياً
                                </h2>
                                <p className="text-center my-3 paragraph">
                                    تقدم لك ميسان منصة شحن كامله متكاملة لا حاجة إلي التركيب او الاعداد فقط قم بتسجيل حسابك مع ميسان <br /> وستتمكن من إرسال الشحنات فوراَ. ادفع حسب استخدامك او قم بالاستراك في احد الباقات المتاحة لدنيا <br /> كما تتيح لك ميسان الربط مع اشهر منصات التجارة الالكترونية العالمية
                                </p>
                            </div>
                            <div className="col-12 position-relative content d-grid">
                                <img src={img} className="img-fluid w-100" alt="" />
                                <div className="position-absolute D1">
                                    <img src={icon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Shipping;