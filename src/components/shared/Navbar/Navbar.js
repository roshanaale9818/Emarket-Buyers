import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import { $ } from 'react-jquery-plugin';
import classes from './Navbar.module.css';




const Navbar = props => {

    let [toggle, setToggle] = useState(false);
    const onToggleHandler = () => {
        setToggle(!toggle);
    }


    useEffect(() => {
        $('nav .dropdown').hover(function () {
            var $this = $(this);
            // 	 timer;
            // clearTimeout(timer);
            $this.addClass('show');
            $this.find('> a').attr('aria-expanded', true);
            // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
            $this.find('.dropdown-menu').addClass('show');
        }, function () {
            var $this = $(this);
            $this.removeClass('show');
            $this.find('> a').attr('aria-expanded', false);
            $this.find('.dropdown-menu').removeClass('show');
        });
    },)
    return <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink to={'/'}   className="navbar-brand">E-market</NavLink>
                <button className="navbar-toggler" onClick={onToggleHandler} type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className={`collapse navbar-collapse ${toggle && 'show'}`} id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><NavLink to={'/'}   className="nav-link">Home</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink to={'/'}   className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <NavLink to={'/shop'}   className={`dropdown-item ${classes.submenu}`}>Shop</NavLink>
                                <NavLink to={'/wishlist'}   className={`dropdown-item ${classes.submenu}`} >Wishlist</NavLink>
                                <NavLink to={'/singleproduct'}   className={`dropdown-item ${classes.submenu}`}>Single Product</NavLink>
                                <NavLink to={'/cart'}   className={`dropdown-item ${classes.submenu}`}>Cart</NavLink>
                                <NavLink to={'/checkout'}   className={`dropdown-item ${classes.submenu}`}>Checkout</NavLink>
                            </div>
                        </li>
                        <li className="nav-item"><NavLink to={'/'}    className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to={'/'}    className="nav-link">Blog</NavLink></li>
                        <li className="nav-item"><NavLink to={'/'}    className="nav-link">Contact</NavLink></li>
                        <li className="nav-item"><NavLink to={'/'}  className="nav-link"><span className="icon-shopping_cart"></span>[0]</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>

    </React.Fragment>
}
export default Navbar;