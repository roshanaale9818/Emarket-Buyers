import React, { useContext, useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import { $ } from 'react-jquery-plugin';
import classes from './Navbar.module.css';
import AuthContext from "../../../store/loggedin/loggedin-context";




const Navbar = props => {

    let [toggle, setToggle] = useState(false);
    const onToggleHandler = () => {
        setToggle(!toggle);
    }


    const authCtx=useContext(AuthContext);
    // console.log(authCtx)


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
                <NavLink to={'/home'}   className="navbar-brand">E-market</NavLink>
                <button className="navbar-toggler" onClick={onToggleHandler} type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className={`collapse navbar-collapse ${toggle && 'show'}`} id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><NavLink to={'/home'}   className="nav-link">Home</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink to={'/product-search'}   className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <NavLink to={'/product-list'}   className={`dropdown-item ${classes.submenu}`}>Product List</NavLink>
                                <NavLink to={'/product-search'}   className={`dropdown-item ${classes.submenu}`} >Product Search</NavLink>
                                {/* <NavLink to={'/singleproduct'}   className={`dropdown-item ${classes.submenu}`}>Single Product</NavLink> */}
                                {/* <NavLink to={'/cart'}   className={`dropdown-item ${classes.submenu}`}>Cart</NavLink> */}
                                <NavLink to={'/cart'}   className={`dropdown-item ${classes.submenu}`}>Cart</NavLink>
                            </div>
                        </li>
                        <li className="nav-item"><NavLink to={'/aboutus'}    className="nav-link">About</NavLink></li>
                        <li className="nav-item"><NavLink to={'/contactus'}    className="nav-link">Contact</NavLink></li>
                        {/* [0] */}
                        <li className="nav-item"><NavLink to={'/cart'}  className="nav-link"><span className="icon-shopping_cart"></span></NavLink></li>
                       {!authCtx.user && <li className="nav-item"><NavLink to={'/login'}    className="nav-link">Login</NavLink></li> }
                       {authCtx.user && <li className="nav-item"><NavLink to={'/profile'}    className="nav-link">Profile</NavLink></li> }
                    </ul>
                </div>
            </div>
        </nav>

    </React.Fragment>
}
export default Navbar;