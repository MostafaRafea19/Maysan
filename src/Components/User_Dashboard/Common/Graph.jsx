import React from "react";


class Graph extends React.Component{


    render() {
        return(
            <React.Fragment>

                <section className="graph bg-white">
                    <div className="container-fluid h-100">
                        <div className="row py-3 h-100">
                            <div className="col-12 head p">
                                <div className="text-right">
                                <a href="#" className="bg-purple py-1 btn btn-Form munth mx-2 active">الشهر</a>
                                <a href="#" className="text-purple py-1 btn btn-outline-light px-4 weak mx-2">الاسبوع</a>
                                </div>
                            </div>
                            <div className="col-12 pt-3 posiation-relative">
                                <div className="graphs p-3 d-flex justify-content-around align-items-end mt-3">
                                    <div className="border-graph d-flex justify-content-around align-items-end h-100 w-100 pl-3">

                                        {this.props.graph.map((element)=>{

                                            let purple_div = {
                                                height: element.purple
                                            }

                                            let orange_div = {
                                                height: element.orange
                                            }

                                            return(
                                                <div className="h-100 super d-flex justify-content-between align-items-end">
                                                    <div className="small " style={orange_div}></div>
                                                    <div className="graph-iteam" style={purple_div}></div>
                                                </div>
                                            )
                                        })}

                                    </div>


                                    <div className="left-graph d-inline mr-3">
                                        <ul className="h-100">
                                            <li className="">006</li>
                                            <li className="">005</li>
                                            <li className="">004</li>
                                            <li className="">003</li>
                                            <li className="">002</li>
                                            <li className="">001</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="under-graph posiation-absliute">
                                    <ul className="d-flex justify-content-around">
                                        <li>001</li>
                                        <li>002</li>
                                        <li>003</li>
                                        <li>004</li>
                                        <li>005</li>
                                        <li>006</li>
                                        <li>007</li>
                                        <li>008</li>
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