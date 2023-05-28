
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import environment from '../../environment/environment';
import AuthContext from '../../store/loggedin/loggedin-context';
const imageSource = './static/images';

const HomeProductWrap = (props) => {
    // const data ='';

    const [products, setProducts] = useState([]);
    const getProducts = () => {
        axios.get(`${environment.sellersUrl}products`).then((response) => {
            console.log(response);
            if (response.statusText.toLowerCase() === "ok") {
                console.log("Setting products", response.data.data);
                setProducts(response.data.data);
                console.log("products", products.slice(0, 8));


            }
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    // const products=[
    //     {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     },
    //     {
    //         productId:1,
    //         productName:"StrawBerry",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-2.jpg'
    //     },
    //     {
    //         productId:1,
    //         productName:"Green Beans",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-3.jpg'
    //     }, {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     },
    //     {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     }, {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     }, {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     }, {
    //         productId:1,
    //         productName:"Bell Pepper",
    //         productPreviousPrice:"120.00",
    //         price:"80.00",
    //         imgUrl:'product-1.jpg'
    //     }
    // ];

    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const onAddProductToCart = async (product) => {
        console.log("product adding", product);
        const _confirm = window.confirm("Are you sure you want to add into your cart?");
        if (!_confirm) { return }
        console.log("authctx", authCtx.user)
        if (!authCtx.isLoggedIn) {
            alert("You are not logged in. You need to login before adding to cart");
            navigate('/login');
            // return;
        }
        if (!authCtx.isLoggedIn) {
            return;
        }
        if (!authCtx.user['accessToken']) {
            alert('somethig went wrong please login first');
            navigate('/login');
            authCtx.logOut();
        }
        
        let reqBody = {
            userId: authCtx.user.id,
            productName: product.name,
            description: "test_description",
            status: 'pending',
            quantity: 1,
            price: product.sale_price,
            imgUrl: '',
            productId: product.id



        }
        const response = await axios.post(environment.apiUrl + 'cart/addcartitems', reqBody, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        });
        console.log("adding", response.data);
        const { data } = response;
        console.log("DATA",data);
        if (data.status === 'error') {
            alert(data.message);
        }
        if(data.status ==='ok'){
            alert("Item added to cart successfull.")
        }
    }

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
                    {products.slice(0, 8).map((product) => {
                        return <div key={product.id} className="col-md-6 col-lg-3 ftco-animated">
                            <div className="product">
                                <Link to={`/product-detail/${product.id}`} className="img-prod">
                                    <img className="img-fluid" src={`${imageSource}/${product.image == null ? 'default.jpg' : product.image}`} alt="product img" />
                                    <span className="status">{product.status}%</span>
                                    <div className="overlay"></div>
                                </Link>
                                <div className="text py-3 pb-4 px-3 text-center">
                                    <h3><Link to={`/product-detail/${product.id}`}>{product.name}</Link></h3>
                                    <div className="d-flex">
                                        <div className="pricing">
                                            <p className="price">
                                                {/* <span className="mr-2 price-dc"></span> */}
                                                <span className="price-sale">{"$" + product.sale_price + "/" + product.unit}</span></p>
                                        </div>
                                    </div>
                                    <div className="bottom-area d-flex px-3">
                                        <div className="m-auto d-flex">

                                            <Link to={'/'} onClick={() => onAddProductToCart(product)} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                                <span><i className="ion-ios-cart"></i></span>
                                            </Link>
                                            {/* <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                                <span><i className="ion-ios-heart"></i></span>
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    {/* <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod">
                                <img className="img-fluid" src={imageSource + '/product-1.jpg'} alt="product img" />
                                <span className="status">30%</span>
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Bell Pepper</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                         <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-2.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Strawberry</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                         <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-3.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Green Beans</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-4.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Purple Cabbage</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link>
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-5.jpg"} alt="product img" />
                                <span className="status">30%</span>
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Tomatoe</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span className="mr-2 price-dc">$120.00</span><span className="price-sale">$80.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod">
                                <img className="img-fluid" src={imageSource + "/product-6.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Brocolli</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                         <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-7.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Carrots</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                        <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 ftco-animated">
                        <div className="product">
                            <Link to={'/'} className="img-prod"><img className="img-fluid" src={imageSource + "/product-8.jpg"} alt="product img" />
                                <div className="overlay"></div>
                            </Link>
                            <div className="text py-3 pb-4 px-3 text-center">
                                <h3><Link to={'/'}>Fruit Juice</Link></h3>
                                <div className="d-flex">
                                    <div className="pricing">
                                        <p className="price"><span>$120.00</span></p>
                                    </div>
                                </div>
                                <div className="bottom-area d-flex px-3">
                                    <div className="m-auto d-flex">
                                         <Link to={'/'} className="add-to-cart d-flex justify-content-center align-items-center text-center">
                                            <span><i className="ion-ios-menu"></i></span>
                                        </Link> 
                                        <Link to={'/'} className="buy-now d-flex justify-content-center align-items-center mx-1">
                                            <span><i className="ion-ios-cart"></i></span>
                                        </Link>
                                        <Link to={'/'} className="heart d-flex justify-content-center align-items-center ">
                                            <span><i className="ion-ios-heart"></i></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
        <hr></hr>
    </React.Fragment>
}
export default HomeProductWrap;

