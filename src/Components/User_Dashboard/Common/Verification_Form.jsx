import React from 'react';
import { Link } from 'react-router-dom';

class Verification_Form extends React.Component {

    render() {
        return (
            <React.Fragment>
                <form className="m-lg-5 px-5 _form text-right col-12">
                    <h2 className="pb-1">رمز التحقق</h2>
                    <h6>فضلاً قم بادخال رمز التحقق المرسل على جوالك</h6>
                    <h6 className="text-center mt-5">تم ارسال الرمز الى {this.props.phone_number}</h6>
                    <div className="h-auto verify d-flex justify-content-center my-4">
                        {
                            this.props.inputs.map((input, index) => {
                                return (
                                    <div className="form-group mx-2" key={index}>
                                        <input type="text" maxLength="1" className="form-control" ref={input} onChange={(e) => { this.props.handleVerificationCodeChange(e, index) }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="d-flex mb-5 p-4 flex-column justify-content-center align-items-center">
                        <button type="submit" className="btn submit-btn py-3">التالى</button>
                        <Link to="" className="text-center p-3 resend">اعادة ارسال الرمز</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Verification_Form;