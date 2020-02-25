import React from 'react';
import Logo from './../../../img/logo 1.png';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header>
                    <img src={Logo} alt="LOGO" />
                    <button className="btn btn-primary">تسجيل</button>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;