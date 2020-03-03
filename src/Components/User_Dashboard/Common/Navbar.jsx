import React from 'react';
import logo from '../../../img/logo 1.png'
import M1 from '../../../img/icon/noti/Vector (4).png'
import M2 from '../../../img/icon/noti/Vector (5).png'
import MM from '../../../img/icon/Rectangle 11.png'
import NN from '../../../img/icon/Group.png'
class Navbar extends React.Component{
    render() {
        return(
            <React.Fragment>
                <section className="Navbar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt=""/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mr-auto text-center">
                                <li className="nav-item dropdown ml-4 mr-4">
                                    <a className="nav-link mt-3 ml-2"  href="#" id="navbarDropdownMenuLink"
                                       role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img src={M1} alt=""/>
                                            <div className="position-relative NM d-flex justify-content-center align-items-center w-100 h-100">
                                                <div className="position-relative NN d-flex justify-content-center align-items-center">
                                                        <span className="text-purple d-flex align-items-center justify-content-center">1</span>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center position-relative">

                                                    <img src={M2} alt="" className="position-absolute polpol"/>
                                                </div>
                                            </div>



                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                                <li className="nav-item ml-5">
                                    <a className="nav-link" href="#">
                                        <img src={MM} alt=""/>
                                    </a>
                                </li>
                                <li className="nav-item active text-center ml-5 mr-2">
                                    <a className="nav-link new" href="#"><img src={NN} alt=""/>شحنة جديدة </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </React.Fragment>
        )
    }
}
export default Navbar;