import React from "react";
import ex from '../../img/Group 141.png'
import expp from '../../img/Group.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'

class Express extends React.Component{
    
    

    constructor(props){
        super(props);
      }
      componentDidMount(){
        AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
      }

    render() {
        return(
            <React.Fragment>
                <section className="express">
                    <div className="container-fluid container-lg px-lg-5">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-xl-7 "data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
                                <div className="img-car position-relative">
                                    <img src={ex} className="img-fluid w-100" alt=""/>
                                    <div className="position-absolute expp" >
                                        <img src={expp}  alt="" />

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 my-sm-4 col-xl-5 text-center ">
                                <p className="text-white">النص الشكلي هو نص لا يحتوى علي اي معنى ويقوم بغرض <br/> تصوري فقط لتحديد اماكن النصوص والحاجة منها</p>
                                <a href="#" className="btn bg-purple btn-sign text-bold text-white">افتح حساب الان</a>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )

    }
}
export default Express;