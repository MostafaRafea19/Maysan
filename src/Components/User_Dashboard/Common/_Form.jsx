import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <form className="p-5 m-lg-5 _form text-right col-lg-8 col-12">
                    <h2 className="py-5">تسجيل الدخول</h2>
                    <div className="form-group py-2">
                        <input type="email" className="form-control" placeholder="معرف المستخدم او رقم الهاتف" />
                    </div>
                    <div className="form-group py-2">
                        <input type="password" className="form-control" placeholder="كلمة المرور" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-column flex-md-row py-2">
                        <Link className="forget-pass align-self-md-center align-self-start">نسيت كلمة المرور؟</Link>
                        <button type="submit" className="btn submit-btn py-3 align-self-md-center align-self-end">الدخول</button>
                    </div>
                </form>

            </React.Fragment>
        )
    }
}

export default Form;