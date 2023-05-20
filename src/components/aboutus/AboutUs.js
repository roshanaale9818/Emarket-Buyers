import React from "react";
import { Link } from "react-router-dom";
import classes from './AboutUs.module.css';
const AboutUs = (props)=>{
 return <React.Fragment>
        <div className={`hero-wrap hero-bread ${classes.banner}` }>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className="mr-2"><Link to={'/home'}>Home</Link></span> <span>About us</span></p>
            <h1 className="mb-0 bread">About us</h1>
          </div>
        </div>
      </div>
    </div>

    <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
			<div className="container">
				<div className="row">
                    
					<div className={`col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center ${classes.aboutus}`}>
						{/* <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span className="icon-play"></span>
						</a> */}
					</div>
					<div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animated">
	          <div className="heading-section-bold mb-4 mt-md-5">
	          	<div className="ml-md-0">
		            <h2 className="mb-4">Welcome to Emarket an eCommerce website</h2>
	            </div>
	          </div>
	          <div className="pb-md-5">
	          	<p></p>
							<p><Link  to={'/shop'} className="btn btn-primary">Buy now</Link></p>
						</div>
					</div>
				</div>
			</div>
		</section>


    <section className="ftco-section ftco-no-pt ftco-no-pb py-5 bg-light">
      <div className="container py-4">
        <div className="row d-flex justify-content-center py-5">
          <div className="col-md-6">
          	<h2  className="mb-0">Subcribe to our Newsletter</h2>
          	<span>Get e-mail updates about our latest shops and special offers</span>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Enter email address"/>
                <input type="submit" value="Subscribe" className="submit px-3" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 </React.Fragment>
}
export default AboutUs;