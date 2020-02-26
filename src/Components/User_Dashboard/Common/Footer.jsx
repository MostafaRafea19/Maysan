import React from 'react';

class Footer extends React.Component {

    render() {
        return (
            <React.Fragment>
                <footer className="col-12">
                    <ul className="d-flex px-5 mx-lg-5 flex-md-row flex-column">
                        <li className="px-2">شبكة ميسان للخدمات اللوجستية 2020</li>
                        <li className="px-2">
                            <a href="#">اتفاقية الاستخدام</a>
                        </li>
                        <li className="px-2">
                            <a href="#">سياسة الخصوصية</a>
                        </li>
                        <li className="px-2">
                            <a href="#">المساعدة</a>
                        </li>
                    </ul>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;