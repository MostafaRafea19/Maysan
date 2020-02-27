import React from "react";
import HH from "../../img/Landing_Page/HH.png"

class Header extends React.Component{

    render() {
        return(
            <React.Fragment>
                <section className="Header position-relative">
                    <div className="container-fluid h-100">
                        <div className="row h-100">

                            <div className="col-6">
                                <div className="mr-5">
                                    <div className="mr-5">
                                        <div className="text-right d-block mt-5 pt-5 mb-5">
                                            <h2 className="">الشحن صار اسهل</h2>
                                            <p className="h5">نعمل علي تقديم خدمة ممُيزة <br/> بمعايير عالمية لأصحاب المتاجر الإلكترونية</p>
                                        </div>
                                        <div className="d-block sign text-right mt-5">
                                            <form action="#" className="">
                                                <div className="row">
                                                    <div className="form-group col-12 position-relative">
                                                        <input type="number" className="form-control" placeholder="رقم الجوال"/>
                                                        <button type="submite" className="btn btnL bg-purple text-white position-absolute">سجل الان</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <ul>
                                                            <li>
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A"/>
                                                                </svg>
                                                                لا حاجة الى بطاقة ائتمان
                                                            </li>
                                                            <li>
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A"/>
                                                                </svg>
                                                                لا حاجة الى بطاقة ائتمان
                                                            </li>
                                                            <li>
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A"/>
                                                                </svg>
                                                                لا حاجة الى بطاقة ائتمان
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 p-0 header-left position-relative">
                                <img src={HH} className="img-fluid" alt=""/>
                                <div className="D1 position-absolute">
                                    <svg width="137" height="138" viewBox="0 0 127 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M63.5 127.395C28.5325 127.395 0 98.8893 0 63.8339C0 28.7785 28.5325 0.394531 63.5 0.394531C98.4675 0.394531 127 28.8998 127 63.8339C127 98.768 98.5889 127.395 63.5 127.395ZM63.5 24.6543C41.8881 24.6543 24.283 42.2427 24.283 63.8339C24.283 85.4251 41.8881 103.013 63.5 103.013C85.1119 103.013 102.717 85.4251 102.717 63.8339C102.717 42.2427 85.2333 24.6543 63.5 24.6543Z" fill="#F26A36"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
export default Header;