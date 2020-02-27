import React from 'react';

class Sent_Shipments_Table extends React.Component {

    render() {
        return (
            <React.Fragment>
                <table className="table">
                    <thead>
                        <th className="py-4">رقم الشحنة</th>
                        <th className="py-4">تاريخ الارسال</th>
                        <th className="py-4">بيانات المرسل</th>
                        <th className="py-4">بيانات المستلم</th>
                        <th className="py-4">عنوان المستلم</th>
                        <th className="py-4">محتوى الشحنة</th>
                        <th className="py-4">حالة الشحنة</th>
                    </thead>
                    <tbody>
                        {
                            this.props.sent_shipments.map((shipment) => {
                                return (
                                    <tr>
                                        <td className="py-4">{shipment.shipment_number}</td>
                                        <td className="py-4">{shipment.sent_date}</td>
                                        <td className="py-4">{shipment.shipper_data}</td>
                                        <td className="py-4">{shipment.recipient_data}</td>
                                        <td className="py-4">{shipment.recipient_address}</td>
                                        <td className="py-4">{shipment.shipment_content}</td>
                                        <td className="py-4">{shipment.shipment_status}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default Sent_Shipments_Table;