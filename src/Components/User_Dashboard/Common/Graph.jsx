import React from "react";


class Graph extends React.Component{


    render() {
        return(
            <React.Fragment>

                <section className="graph bg-white">
                    <div className="container-fluid">
                        <div className="row py-3">
                            <div className="col-12 head p">
                                <div className="text-right">
                                <a href="#" className="bg-purple py-1 btn btn-Form munth mx-2">الشهر</a>
                                <a href="#" className="text-purple py-1 btn btn-outline-light px-4 weak mx-2">الاسبوع</a>
                                </div>
                            </div>
                            <div className="col-12 h-100 mt-auto">
                                <div className="mt-auto">
                                    <ul className="mt-auto">
                                        <li>-</li>
                                        <li>-</li>
                                        <li>-</li>
                                        <li>-</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Graph;