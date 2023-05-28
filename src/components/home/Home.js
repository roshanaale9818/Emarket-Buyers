import React, { useEffect, useState } from "react";
import classes from './Home.module.css';
import { $ } from 'react-jquery-plugin';
import HomeProductWrap from "./HomeProductWrap";
import { Link, useNavigate } from 'react-router-dom';
import Feature from "./Feature";
import axios from "axios";
import environment from "../../environment/environment";
// carousel setting  
const carousel = function () {
    console.log("CAROUSEL RUNN");
    $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
};
const Home = props => {
    const navigate = useNavigate();
    const onViewMoreHandler = () => {
        navigate('/product-search');
    };
    const [categoriesList, setCategoriesList] = useState([]);
    const getCategories = () => {
        axios.get(`${environment.sellersUrl}categories`).then((res) => {
            console.log("resa", res);
            if (res.status === 200) {
                setCategoriesList(res.data.data);
                console.log("resa", categoriesList);

            }
        })
    }
    useEffect(() => {
        carousel();
        getCategories()
    }, []);

    return <React.Fragment>
        <section id="home-section" className="hero">
            <div className="home-slider owl-carousel">
                <div className={`${classes.homeImage1} slider-item`}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div className={`col-md-12 fadeInUp ftco-animated ftco-animate text-center`}>
                                <h1 className={`mb-2 ${classes.font4}`}>We serve Fresh Vegetables &amp; Fruits</h1>
                                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                <p><span onClick={onViewMoreHandler} className={`btn btn-primary`}>View More Products</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.homeImage2} slider-item`}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div className="col-sm-12 fadeInUp ftco-animated ftco-animate text-center">
                                <h1 className={`mb-2 ${classes.font4}`}>100% Fresh &amp; Organic Foods</h1>
                                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                <p><span onClick={onViewMoreHandler} className={`btn btn-primary`}>View More Products</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <Feature />




        <section className="ftco-section ftco-category ftco-no-pt">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">

                            {
                                categoriesList.length > 0 && categoriesList.map(category => {
                                    return <div className="col-md-4" key={category.id}> <div className={`category-wrap  img mb-4 d-flex align-items-end ftco-animated ${classes.category3}`} >
                                        <div className="text px-3 py-1">
                                            <h2 className="mb-0"><Link>{category.name}</Link></h2>
                                        </div>
                                    </div>
                                    </div>
                                })
                            }



                            {/* <div className="col-md-6 order-md-last align-items-stretch d-flex">
								<div className={`category-wrap-2  img align-self-stretch d-flex ftco-animated  ${classes['category']}`} >
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><Link to={'/product-search'} className="btn btn-primary">Shop now</Link></p>
									</div>
								</div>
							</div> */}
                            {/* <div className="col-md-6">
								<div className={`category-wrap  img mb-4 d-flex align-items-end ftco-animated ${classes['category1']}`}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><Link to={'/'}>Fruits</Link></h2>
									</div>
								</div>
								<div className={`category-wrap  img d-flex align-items-end  ftco-animated ${classes['category2']}`}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><Link to={'/'}>Vegetables</Link></h2>
									</div>
								</div>
							</div> */}
                        </div>
                    </div>

                    {/* <div className="col-md-4">
						<div className={`category-wrap  img mb-4 d-flex align-items-end ftco-animated ${classes.category3}`} >
							<div className="text px-3 py-1">
								<h2 className="mb-0"><Link to={'/'}>Juices</Link></h2>
							</div>		
						</div>
						<div className= {`category-wrap  img d-flex align-items-end ftco-animated ${classes.category4}`}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><Link to={'/'}>Dried</Link></h2>
							</div>
						</div>
					</div> */}
                </div>
            </div>
        </section>






        <HomeProductWrap />
    </React.Fragment>
}
export default Home;



// fetch API TO get movies  