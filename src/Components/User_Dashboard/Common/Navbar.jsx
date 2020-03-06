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
                                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.3333 24H2.33325C1.04663 24 0 22.9534 0 21.6668C0 20.9839 0.297363 20.3374 0.815918 19.8933C0.849365 19.864 0.885254 19.8374 0.922607 19.8132C2.87988 18.1052 4 15.648 4 13.0532V9.33326C4 4.99074 6.94263 1.26271 11.156 0.266616C11.6946 0.142593 12.2334 0.471938 12.3601 1.01076C12.4866 1.54811 12.1533 2.08668 11.6174 2.21339C8.30933 2.99464 6 5.92262 6 9.33326V13.0532C6 16.2747 4.58789 19.3228 2.12939 21.4146C2.10938 21.4307 2.09204 21.4453 2.07056 21.46C2.03467 21.5054 2 21.5747 2 21.6668C2 21.8479 2.1521 22 2.33325 22H24.3333C24.5146 22 24.6667 21.8479 24.6667 21.6668C24.6667 21.5733 24.6321 21.5054 24.5947 21.46C24.5747 21.4453 24.5559 21.4307 24.5374 21.4146C23.3428 20.396 22.3999 19.1668 21.7361 17.76C21.4988 17.2612 21.7119 16.6653 22.2119 16.428C22.7161 16.1907 23.3066 16.4067 23.5427 16.9053C24.0706 18.02 24.8105 18.9988 25.7466 19.8174C25.7812 19.8413 25.8174 19.8667 25.8479 19.8933C26.3694 20.3374 26.6667 20.9839 26.6667 21.6668C26.6667 22.9534 25.6201 24 24.3333 24Z" fill="#4E2F8A"/>
                                        </svg>


                                        <div className="position-relative NM d-flex justify-content-center align-items-center w-100 h-100">
                                                <div className="position-relative NN d-flex justify-content-center align-items-center">
                                                        <span className="text-purple d-flex align-items-center justify-content-center">1</span>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center position-relative">
                                                    <svg className="position-absolute polpol" width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.33301 6C2.57715 6 0.333008 3.75732 0.333008 1C0.333008 0.447998 0.781006 0 1.33301 0C1.88501 0 2.33301 0.447998 2.33301 1C2.33301 2.65479 3.67969 4 5.33301 4C6.98633 4 8.33301 2.65479 8.33301 1C8.33301 0.447998 8.78101 0 9.33301 0C9.88501 0 10.333 0.447998 10.333 1C10.333 3.75732 8.08911 6 5.33301 6Z" fill="#4E2F8A"/>
                                                    </svg>

                                                    {/*<img src={M2} alt="" className=""/>*/}
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