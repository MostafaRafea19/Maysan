import React from 'react';
import { Link } from 'react-router-dom';

class Register_Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <form className="m-lg-5 px-5 _form text-right col-lg-8 col-12 my-3">
                    <h2 className="pb-5">التسجيل</h2>
                    <div className="row h-auto">
                        <div className="form-group py-2 col-md-6 col-12">
                            <input type="text" className="form-control" placeholder="الاسم الاول" />
                        </div>
                        <div className="form-group py-2 col-md-6 col-12">
                            <input type="text" className="form-control" placeholder="الاسم التاني" />
                        </div>
                    </div>
                    <div className="form-group py-2">
                        <input type="email" className="form-control" placeholder="البريد الالكتروني" />
                    </div>
                    <div className="form-group py-2">
                        <input type="text" className="form-control" placeholder="رقم الهاتف" />
                    </div>
                    <div className="form-group py-2">
                        <input type="password" className="form-control" placeholder="كلمة المرور" />
                    </div>

                    <div className="d-flex py-2">
                        <Link to="/verification" className="btn submit-btn py-3 mr-lg-auto m-auto">التسجيل</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Register_Form;