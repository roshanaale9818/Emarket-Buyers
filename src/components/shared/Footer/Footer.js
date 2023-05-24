import React from "react";
import {NavLink} from 'react-router-dom';
const Footer = (props) => {
    const gotoHandler  = (e)=>{
        e.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return <React.Fragment>
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row">
                    <div className="mouse">
                        <span  onClick={gotoHandler} className="mouse-icon">
                            <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
                        </span>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Emarket</h2>
                            <p>Far far away, behind the word mountains, far from the countries VictoriNavLink and Queensland.</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><NavLink to={'/'}><span className="icon-twitter"></span></NavLink></li>
                                <li className="ftco-animate"><NavLink to={'/'}><span className="icon-facebook"></span></NavLink></li>
                                <li className="ftco-animate"><NavLink to={'/'}><span className="icon-instagram"></span></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-5">
                            <h2 className="ftco-heading-2">Menu</h2>
                            <ul className="list-unstyled">
                                <li><NavLink to={'/shop'} className="py-2 d-block">Shop</NavLink></li>
                                <li><NavLink to={'/aboutus'} className="py-2 d-block">About</NavLink></li>
                                {/* <li><NavLink to={'/'} className="py-2 d-block">Journal</NavLink></li> */}
                                <li><NavLink to={'/contactus'} className="py-2 d-block">Contact Us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Help</h2>
                            <div>
                                <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                    {/* <li><NavLink to={'/'} className="py-2 d-block">Shipping Information</NavLink></li> */}
                                    {/* <li><NavLink to={'/'} className="py-2 d-block">Returns &amp; Exchange</NavLink></li> */}
                                    {/* <li><NavLink to={'/'} className="py-2 d-block">Terms &amp; Conditions</NavLink></li>
                                    <li><NavLink to={'/'} className="py-2 d-block">Privacy Policy</NavLink></li>
                                    <li><NavLink to={'/'} className="py-2 d-block">FAQs</NavLink></li> */}
                                    <li><NavLink to={'/'} className="py-2 d-block">Contact</NavLink></li>
                                </ul>
                                {/* <ul className="list-unstyled">
                                    
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have any Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, Parramatta, Sydney, Australia</span></li>
                                    <li><NavLink to={'/'}><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></NavLink></li>
                                    <li><NavLink to={'/'}><span className="icon icon-envelope"></span><span className="text">info@emarket.com</span></NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p> CopyRight E market
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
}

export default Footer;