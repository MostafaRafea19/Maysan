import React from "react";
import Logo from '../../img/logo 1.png'
class Navbar extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="navbar-landing px-4">
                    <nav className="navbar navbar-expand-lg navbar-light px-4">
                        <a className="navbar-brand" href="#"><img src={Logo} className='img-fluid' alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <div className="mx-2 d-flex flex-column flex-lg-row align-items-center mr-auto links bg-white">
                                    <a className="nav-item nav-link mx-2 text-black" href="#">المميزات</a>
									<a className="nav-item nav-link mx-2 text-black" href="https://maysanexpress.com/#delivery-number">تتبع الشحنة</a>
                                    <a className="nav-item nav-link mx-2 text-black" href="https://maysanexpress.com/">الاسعار</a>
                                    <a className="nav-item nav-link mx-2 text-black" href="https://maysanexpress.com/faqs">الدعم والمساعدة</a>
                                </div>
                                <div className="d-flex mx-2 flex-column flex-lg-row align-items-center bg-white">
                                    <a className="nav-item nav-link mx-2 text-purple" href="https://new.maysanexpress.com/platform/ar"> تسجيل الدخول </a>
                                    <a className="nav-item nav-link btn btn-nav text-white bg-orange" href="https://new.maysanexpress.com/platform/ar">سجل الان</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>

            </React.Fragment>
        )
    }
}
export default Navbar;