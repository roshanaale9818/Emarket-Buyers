
import React from 'react';
const imageSource = './static/images';
const HomeProduct = (props) => {
    return <React.Fragment>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section text-center ftco-animated">
                        <span className="subheading">Featured Products</span>
                        <h2 className="mb-4">Our Products</h2>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod">
                                <img className="img-fluid" src={imageSource+'/product-1.jpg'} alt="product img" />
                                <span className="status">30%</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Bell Pepper</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-2.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Strawberry</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-3.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Green Beans</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-4.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Purple Cabbage</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-5.jpg"} alt="product img" />
                                <span className="status">30%</span>
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Tomatoe</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod">
                                <img className="img-fluid" src={imageSource+"/product-6.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Brocolli</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-7.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Carrots</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <a href="#" className="img-prod"><img className="img-fluid" src={imageSource+"/product-8.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </a>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><a href="#">Fruit Juice</a></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <a href="#" className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </a>
                                        <a href="#" className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </a>
                                        <a href="#" className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
}
export default HomeProduct;

