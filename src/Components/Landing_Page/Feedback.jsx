import React from 'react';
import { Carousel } from 'react-bootstrap';
import feedback from './.././../img/Landing_Page/feedback.svg';
import signature from './../../img/Landing_Page/signature.svg';
import comment_photo from './../../img/Landing_Page/comment_photo.png';
import feedback_01 from './../../img/Landing_Page/feedback_right_top.png';
import feedback_02 from './../../img/Landing_Page/feedback_left_middle.png';
import feedback_03 from './../../img/Landing_Page/feedback_middle_bottom.png';
import feedback_04 from './../../img/Landing_Page/feedback_middle_top.png';
import feedback_05 from './../../img/Landing_Page/feedback_right_middle.png';
import feedback_06 from './../../img/Landing_Page/feedback_left_bottom.png';


class Feedback extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="feedback my-5">
                    <div className="container">
                        <div>
                            <img src={feedback_01} className="feedback-img-01 img-fluid position-absolute" />
                        </div>
                        <div>
                            <img src={feedback_02} className="feedback-img-02 img-fluid position-absolute" />
                        </div>
                        <div>
                            <img src={feedback_03} className="feedback-img-03 img-fluid position-absolute" />
                        </div>
                        <div>
                            <img src={feedback_04} className="feedback-img-04 img-fluid position-absolute" />
                        </div>
                        <div>
                            <img src={feedback_05} className="feedback-img-05 img-fluid position-absolute" />
                        </div>
                        <div>
                            <img src={feedback_06} className="feedback-img-06 img-fluid position-absolute" />
                        </div>
                        <h2 className="text-center">ماذا يقول عملائنا عنا</h2>
                        <div className="row d-flex justify-content-center align-items-center">
                            <Carousel controls={false} className="col-6 my-5 position-relative" interval={3000}>
                                <Carousel.Item>
                                    <div className="feed mb-1"></div>
                                    <div className="paragraph p-5 d-flex flex-column align-items-center position-relative">
                                        <div className="comment-photo position-absolute">
                                            <img src={comment_photo} className="img-fluid" />
                                        </div>
                                        <h6 className="mb-0">احمد محمد سعيد</h6>
                                        <div className="comment">
                                            <img src={feedback} className="img-fluid" />
                                            <img src={feedback} className="img-fluid" />
                                        </div>
                                        <p className="text-center px-4 py-3">
                                            النص الشكلى هو نص لا يحوى اي معنى ويقوم بغرض تصورى فقط لتحديد اماكن النصوص والحاجة منها
                                        </p>
                                        <div>
                                            <img src={signature} className="img-fluid" />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="feed mb-1"></div>
                                    <div className="paragraph p-5 d-flex flex-column align-items-center position-relative">
                                        <div className="comment-photo position-absolute">
                                            <img src={comment_photo} className="img-fluid" />
                                        </div>
                                        <h6 className="mb-0">احمد محمد سعيد</h6>
                                        <div className="comment">
                                            <img src={feedback} className="img-fluid" />
                                            <img src={feedback} className="img-fluid" />
                                        </div>
                                        <p className="text-center px-4 py-3">
                                            النص الشكلى هو نص لا يحوى اي معنى ويقوم بغرض تصورى فقط لتحديد اماكن النصوص والحاجة منها
                                        </p>
                                        <div>
                                            <img src={signature} className="img-fluid" />
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div className="feed mb-1"></div>
                                    <div className="paragraph p-5 d-flex flex-column align-items-center position-relative">
                                        <div className="comment-photo position-absolute">
                                            <img src={comment_photo} className="img-fluid" />
                                        </div>
                                        <h6 className="mb-0">احمد محمد سعيد</h6>
                                        <div className="comment">
                                            <img src={feedback} className="img-fluid" />
                                            <img src={feedback} className="img-fluid" />
                                        </div>
                                        <p className="text-center px-4 py-3">
                                            النص الشكلى هو نص لا يحوى اي معنى ويقوم بغرض تصورى فقط لتحديد اماكن النصوص والحاجة منها
                                        </p>
                                        <div>
                                            <img src={signature} className="img-fluid" />
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}

export default Feedback;