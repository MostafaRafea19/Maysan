import React from "react";
import ex from '../../img/Group 141.png'
import expp from '../../img/Group.svg';
import WOW from "wowjs";

class Express extends React.Component {


    componentDidMount(){
        new WOW.WOW().init();
    };

    render() {
        return (
            <React.Fragment>
                <section className="express">
                    <div className="container-fluid container-lg px-lg-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-xl-7 wow bounceInRight" data-wow-iteration="2">
                                <div className="img-car position-relative">
                                    <img src={ex} className="img-fluid w-100" alt="" />
                                    <div className="position-absolute expp" >
                                        <img src={expp} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-4 col-xl-5 text-center wow bounceInLeft" data-wow-iteration="1">
                                <p className="text-white">النص الشكلي هو نص لا يحتوى علي اي معنى ويقوم بغرض <br /> تصوري فقط لتحديد اماكن النصوص والحاجة منها</p>
                                <a href="#" className="btn bg-purple btn-sign text-bold text-white">افتح حساب الان</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}
export default Express;