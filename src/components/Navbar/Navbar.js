import React, { useEffect, useState } from "react";
import { $ } from 'react-jquery-plugin'




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
                <a className="navbar-brand" href="index.html">E-market</a>
                <button className="navbar-toggler" onClick={onToggleHandler} type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className={`collapse navbar-collapse ${toggle && 'show'}`} id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="shop.html">Shop</a>
                                <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                                <a className="dropdown-item" href="product-single.html">Single Product</a>
                                <a className="dropdown-item" href="cart.html">Cart</a>
                                <a className="dropdown-item" href="checkout.html">Checkout</a>
                            </div>
                        </li>
                        <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        <li className="nav-item cta cta-colored"><a href="cart.html" className="nav-link"><span className="icon-shopping_cart"></span>[0]</a></li>

                    </ul>
                </div>
            </div>
        </nav>

    </React.Fragment>
}
export default Navbar;