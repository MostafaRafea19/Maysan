import React from "react";
import ex from '../../img/Group 141.png'
import expp from '../../img/Group.svg';
class Express extends React.Component{

    render() {
        return(
            <React.Fragment>
                <section className="express">
                    <div className="container pr-5 pl-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-7">
                                <div className="img-car position-relative">
                                    <img src={ex} className="img-fluid" alt=""/>
                                    <div className="position-absolute expp">
                                        <img src={expp} alt=""/>

                                    </div>
                                </div>
                            </div>
                            <div className="col-5 text-center ">
                                <p className="text-white">النص الشكلي هو نص لا يحتوى علي اي معنى ويقوم بغرض <br/> تصوري فقط لتحديد اماكن النصوص والحاجة منها</p>
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