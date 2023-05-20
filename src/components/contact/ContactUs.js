import React from "react";
import classes from './ContactUs.module.css';
import { Link } from "react-router-dom";
import useInput from "../../hooks/use-input";
import { isEmail, isNotEmpty } from "../shared/form-logics/form-logic";
import Banner from "../banner/Banner";
const contactData = {
    address: '203 Fake St. Mountain View, Parramatta, Sydney, Australia',
    phone: '+ 1235 2355 98',
    email: 'info@emarket.com.au',
    website: 'www.dummywebsite.com'
}

const ContactUs = (props) => {


    const {
        value: nameValue,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName,
    } = useInput(isNotEmpty);
    const {
        value: subjectValue,
        isValid: subjectIsValid,
        hasError: subjectHasError,
        valueChangeHandler: subjectChangeHandler,
        inputBlurHandler: subjectBlurHandler,
        reset: resetSubject,
    } = useInput(isNotEmpty);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);


    const {
        value: messageValue,
        isValid: messageIsValid,
        hasError: messageHasError,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: resetMessage,
    } = useInput(isNotEmpty);

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }





    return <React.Fragment>
        {/* <div className={`hero-wrap hero-bread ${classes.banner}`}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to={'/home'}>Home</Link></span> <span>Contact us</span></p>
            <h1 className="mb-0 bread">Contact us</h1>
          </div>
        </div>
      </div>
    </div> */}

        <Banner name='Contact Us' parentUrl='/home' parentName='Home ' />

        <section className="ftco-section contact-section bg-light">
            <div className="container">
                <div className="row d-flex mb-5 contact-info">
                    <div className="w-100"></div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4"><p>{contactData.address}</p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Phone:</span> <Link to={'/'} >{contactData.phone}</Link></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Email:</span> <span to={'/'}>{contactData.email}</span></p>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex">
                        <div className="info bg-white p-4">
                            <p><span>Website</span> <Link to={'/'} >{contactData.website}</Link></p>
                        </div>
                    </div>
                </div>
                <div className="row block-9">
                    <div className="col-md-12 order-md-last d-flex">
                        <form onSubmit={onSubmitHandler} className="bg-white p-5 contact-form">
                            <div className="form-group">

                                <input type="text" className={`form-control ${nameHasError && 'invalid'}`} value={nameValue}
                                    onChange={nameChangeHandler}
                                    onBlur={nameBlurHandler} placeholder="Your Name" />
                                {nameHasError && <p className="error-text">Name is required.</p>}
                            </div>
                            <div className="form-group">
                                <input type="text" className={`form-control ${emailHasError && 'invalid'}`} value={emailValue}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler} placeholder="Your Email" />
                                {emailHasError && <p className="error-text">Email is required.</p>}
                            </div>
                            <div className="form-group">
                                <input type="text" className={`form-control ${subjectHasError && 'invalid'}`} value={subjectValue}
                                    onChange={subjectChangeHandler}
                                    onBlur={subjectBlurHandler} placeholder="Subject" />
                                {subjectHasError && <p className="error-text">Subject is required</p>}
                            </div>
                            <div className="form-group">
                                <textarea name="" id="" cols="30" rows="7" value={messageValue}
                                    onChange={messageChangeHandler}
                                    onBlur={messageBlurHandler} className={`form-control ${messageHasError && 'invalid'}`} placeholder="Message"></textarea>
                                {messageHasError && <p className="error-text">Message is required</p>}
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>

                    </div>
                    {/* 
          <div className="col-md-6 d-flex">
          	<div id="map" className="bg-white"></div>
          </div> */}
                </div>
            </div>
        </section>
    </React.Fragment>
}

export default ContactUs;