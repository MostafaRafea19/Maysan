import React from 'react';
import Logo from './../../../img/logo 1.png';
import { Link, useLocation } from 'react-router-dom';

class Header extends React.Component {

    pathname = () => {
        let location = useLocation();
        let path = location.pathname
        console.log(path);
    }
    render() {
        return (
            <React.Fragment>
                <header className="d-flex justify-content-between align-items-center my-5">
                    <section>
                        <img src={Logo} alt="LOGO" onClick={this.pathname} />
                    </section>
                    <Link to="/login" className="btn login_btn px-3 py-2">سجل الان</Link>
                </header>
            </React.Fragment>
        )
    }

}

export default Header;