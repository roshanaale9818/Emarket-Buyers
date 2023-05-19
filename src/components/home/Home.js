import React,{useEffect} from "react";
import classes from './Home.module.css';
import { $ } from 'react-jquery-plugin';
import HomeProductWrap  from "./HomeProductWrap";
// carousel setting  
const carousel = function() {
    console.log("CAROUSEL RUNN");
    $('.home-slider').owlCarousel({
    loop:true,
    autoplay: false,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplayHoverPause: false,
    items: 1,
    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
    });
};
const Home = props => {
    useEffect(()=>{
     
        carousel();
    })
    return <React.Fragment>
        <section id="home-section" className="hero">
            <div className="home-slider owl-carousel">
                <div className={`${classes.homeImage1} slider-item`}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div className={`col-md-12 fadeInUp ftco-animated ftco-animate text-center`}>
                                <h1 className={`mb-2 ${classes.font4}`}>We serve Fresh Vegestables &amp; Fruits</h1>
                                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                <p><span className={`btn btn-primary`}>View Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${classes.homeImage2} slider-item`}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">
                            <div className="col-sm-12 fadeInUp ftco-animated ftco-animate text-center">
                                <h1  className={`mb-2 ${classes.font4}`}>100% Fresh &amp; Organic Foods</h1>
                                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                                <p><span className={`btn btn-primary`}>View Details</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section className="ftco-section">
			<div className="container">
				<div className="row no-gutters ftco-services">
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-shipped"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Free Shipping</h3>
                <span>On order over $100</span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-diet"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Always Fresh</h3>
                <span>Product well package</span>
              </div>
            </div>    
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-award"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Superior Quality</h3>
                <span>Quality Products</span>
              </div>
            </div>      
          </div>
          <div className="col-md-3 text-center d-flex align-self-stretch ftco-animated">
            <div className="media block-6 services mb-md-0 mb-4">
              <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
            		<span className="flaticon-customer-service"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Support</h3>
                <span>24/7 Support</span>
              </div>
            </div>      
          </div>
        </div>
			</div>
		</section>



        <section className="ftco-section ftco-category ftco-no-pt">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch d-flex">
								<div className={`category-wrap-2  img align-self-stretch d-flex ftco-animated  ${classes['category']}`} >
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><a href="#" className="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className={`category-wrap  img mb-4 d-flex align-items-end ftco-animated ${classes['category1']}`}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Fruits</a></h2>
									</div>
								</div>
								<div className={`category-wrap  img d-flex align-items-end  ftco-animated ${classes['category2']}`}>
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className={`category-wrap  img mb-4 d-flex align-items-end ftco-animated ${classes.category3}`} >
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Juices</a></h2>
							</div>		
						</div>
						<div className= {`category-wrap  img d-flex align-items-end ftco-animated ${classes.category4}`}>
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>



        <HomeProductWrap/>
    </React.Fragment>
}
export default Home;