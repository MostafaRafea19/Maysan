import React from "react";
import Logo from '../../img/logo 1.png'
class Navbar extends React.Component{

    render() {
        return(
            <React.Fragment>
                <section className="navbar-landing">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"><img src={Logo} className='img-fluid' alt=""/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-4" id="navbarNavAltMarkup">
                            <div className="navbar-nav mr-auto">
                                <a className="nav-item nav-link ml-2 text-black" href="#">المميزات</a>
                                <a className="nav-item nav-link ml-2 text-black" href="#">الاسعار</a>
                                <a className="nav-item nav-link ml-4 text-black" href="#">ألدعم والمساعدة</a>
                                <a className="nav-item nav-link ml-2 text-purple" href="#"> تسجيل الدخول </a>
                                <a className="nav-item nav-link btn btn-nav text-white bg-purple" href="#">سجل الان</a>
                            </div>
                        </div>
                    </nav>
                </section>

            </React.Fragment>
        )
    }
}
export default Navbar;