import React from 'react';
import logo from '../../../img/logo 1.png'
import MM from '../../../img/icon/Rectangle 11.png'
import RR from '../../../img/icon/active 2.png'
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
                                    <a className="nav-link mt-3 ml-2" href="#" id="navbarDropdownMenuLink"
                                       role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={RR} className="notfication" alt=""/>
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