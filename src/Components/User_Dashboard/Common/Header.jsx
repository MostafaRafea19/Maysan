import React from 'react';
import Logo from './../../../img/logo 1.png';

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <header className="d-flex">
                    <section className="ml-auto">
                        <img src={Logo} alt="LOGO" />
                    </section>
                    <button className="btn login_btn">سجل الآن</button>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;