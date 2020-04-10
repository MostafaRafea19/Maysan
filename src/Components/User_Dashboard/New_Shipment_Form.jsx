import React from 'react';

class New_Shipment_Form extends React.Component{
    render() {
        return(
            <React.Fragment>
                <section className="form-shipments">
                    <form action="#" className="">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-6 p-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="الاسم بالكامل"/>
                                    </div>
                                </div>
                                <div className="col-6  p-3 ">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>الدولة...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6  p-3 ">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>المدينة</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 p-3 ">
                                    <div className="form-group">
                                        <select className="form-control">
                                            <option>الحي...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="العنوان"/>
                                    </div>
                                </div>
                                <div className="col-12 p-3">
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="رقم الجوال"/>
                                    </div>
                                    <div className="form-group float-left ">
                                        <button className="btn-Form btn submit-btn py-3">ألتالي</button>
                                    </div>
                                    <div className="form-group float-right ">
                                        <button className="btn-Form-back btn submit-btn py-3">السابق</button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </form>
                </section>
            </React.Fragment>
        )
    }
}
export default New_Shipment_Form;