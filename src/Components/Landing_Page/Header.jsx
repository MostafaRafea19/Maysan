import React from "react";
import HH from "../../img/Landing_Page/HH.png"

class Header extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="Header position-relative">
                    <div className="container-fluid h-100">
                        <div className="row h-100 justify-content-center align-items-center">

                            <div className="col-lg-6 col-12 d-flex justify-content-center position-relative h-100">

                                <div className="mr-lg-5">
                                    <div className="mr-lg-5">
                                        <div className="text-center text-lg-right d-block mt-5 pt-5 mb-5">
                                            <h2 className="h1 text-black text-bold mb-3">الشحن صار اسهل</h2>
                                            <p className="pragraph-header text-black">نعمل علي تقديم خدمة شحن ممُيزة <br /> بمعايير عالمية لأصحاب المتاجر الإلكترونية</p>
                                        </div>
                                        <div className="d-block sign text-center text-lg-right mt-5">
                                            <form action="#" className="">
                                                <div className="row justify-content-center">
                                                    <div className="form-group col-lg-12 col-10 position-relative">
                                                        <input type="number" className="form-control" placeholder="رقم الجوال" />
                                                        <button type="submit" className="btn btnL bg-purple text-white position-absolute">سجل الان</button>
                                                    </div>
                                                    <div className="col-12">
                                                        <ul className="mt-3">
                                                            <li className="list-inline-item mx-2">
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A" />
                                                                </svg>
                                                                لا حاجة الى بطاقة ائتمان
                                                            </li>
                                                            <li className="list-inline-item mx-2">
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A" />
                                                                </svg>
                                                                نظام سهل ومرن
                                                            </li>
                                                            <li className="list-inline-item mx-2">
                                                                <svg className='ml-1' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88476 1.66199L4.62164 7.14039C4.32859 7.4454 3.85972 7.4454 3.56667 7.14039L0.940976 4.3836C0.64793 4.07859 0.64793 3.58589 0.940976 3.28088C1.23402 2.97587 1.7029 2.97587 1.99594 3.28088L4.10588 5.48632L8.84151 0.559276C9.13456 0.254269 9.60343 0.254269 9.89648 0.559276C10.1778 0.864283 10.1778 1.35699 9.88476 1.66199Z" fill="#4E2F8A" />
                                                                </svg>
                                                                خدمة عملاء
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="D3 position-absolute d-none d-lg-block">
                                    <svg width="61" height="62" viewBox="0 0 61 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30.4947 61.3942C13.7023 61.3942 0.000244141 47.7052 0.000244141 30.8706C0.000244141 14.036 13.7023 0.405273 30.4947 0.405273C47.287 0.405273 60.9891 14.0943 60.9891 30.8706C60.9891 47.6469 47.3453 61.3942 30.4947 61.3942ZM30.4947 12.0555C20.1161 12.0555 11.6616 20.5019 11.6616 30.8706C11.6616 41.2393 20.1161 49.6857 30.4947 49.6857C40.8733 49.6857 49.3278 41.2393 49.3278 30.8706C49.3278 20.5019 40.9316 12.0555 30.4947 12.0555Z" fill="#F26A36" />
                                    </svg>
                                </div>

                            </div>

                            <div className=" col-md-6 p-0 h-100 header-left position-relative d-none d-lg-block">
                                <img src={HH} className="img-fluid" alt="" />

                                <div className="D2 position-absolute">
                                    <svg width="62" height="61" viewBox="0 0 62 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.3987 60.9889C14.6064 60.9889 0.904297 47.2999 0.904297 30.4653C0.904297 13.6308 14.6064 0 31.3987 0C48.1911 0 61.8932 13.689 61.8932 30.4653C61.8932 47.2416 48.2494 60.9889 31.3987 60.9889ZM31.3987 11.6502C21.0201 11.6502 12.5657 20.0966 12.5657 30.4653C12.5657 40.834 21.0201 49.2804 31.3987 49.2804C41.7773 49.2804 50.2318 40.834 50.2318 30.4653C50.2318 20.0966 41.8357 11.6502 31.3987 11.6502Z" fill="#F26A36" />
                                    </svg>
                                </div>

                                <div className="D1 position-absolute">
                                    <svg width="137" height="138" viewBox="0 0 127 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M63.5 127.395C28.5325 127.395 0 98.8893 0 63.8339C0 28.7785 28.5325 0.394531 63.5 0.394531C98.4675 0.394531 127 28.8998 127 63.8339C127 98.768 98.5889 127.395 63.5 127.395ZM63.5 24.6543C41.8881 24.6543 24.283 42.2427 24.283 63.8339C24.283 85.4251 41.8881 103.013 63.5 103.013C85.1119 103.013 102.717 85.4251 102.717 63.8339C102.717 42.2427 85.2333 24.6543 63.5 24.6543Z" fill="#F26A36" />
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