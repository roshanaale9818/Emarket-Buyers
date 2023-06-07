import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import classes from './Cart.module.css';
import axios from 'axios';
import environment from '../../environment/environment';
import AuthContext from '../../store/loggedin/loggedin-context';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [shippingAddress, setShippingAddress] = useState('');
    const [description, setDescription] = useState('');
    const authCtx = useContext(AuthContext);
    const onDeleteItem = (item) => {
        if (!authCtx.user) {
            alert("Something went wrong.Please login again");
            authCtx.logOut();
        }
        let _confirm = window.confirm("Are you sure you want to delete" + item.productName + ' from your cart ?')

        if (!_confirm) {
            return;
        }
        axios.post(environment.apiUrl + 'cart/deletecartitem', {
            userId: String(authCtx.user.id),
            userCartId: item.id
        }, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        }).then((response) => {
            console.log("response", response)
            if (response.data.status === 'ok') {
                // console.log('sa',response.data.data);
                // setCartItems(response.data.data);
                // console.log("Cart Items", cartItems);
                alert("Cart item deleted successsfull.");
                onGetCartItems();
            }
            else {
                // alert("Something went wrong");
                console.error("error occured.")
            }
        }).catch((err) => {
            alert("Something went wrong please try again later.")
            console.error(err)
        })
    }

    const [totalAmt, setTotalAmt] = useState(0);
    const onGetCartItems = (prop) => {
        if (!authCtx.user) {
            // alert("Something went wrong.Please login again");
            authCtx.logOut();
            return;
        }

        axios.post(environment.apiUrl + 'cart/getcartitems', {
            userId: String(authCtx.user.id)
        }, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        }).then((response) => {
            console.log("response", response)
            if (response.data.status === 'ok') {
                console.log('sa', response.data.data);
                setCartItems(response.data.data);
                console.log("Cart Items", cartItems);
                // setTotalAmt(0);
                let amt = 0;
                cartItems.forEach(cart => {
                    console.log('cartItem', cart)
                    //  setTotalAmt(totalAmt +(cart.quantity*cart.price));
                    amt = amt + (cart.quantity * cart.price);
                })
                console.log("AMT.", amt);
                setTotalAmt(amt);
            }
            else {
                alert("Something went wrong");
            }
        }).catch((err) => {
            alert("Something went wrong please try again later.")
            console.error(err)
        })

    }
    // const {isLoggedIn}= authCtx;
    useEffect(() => {
        onGetCartItems();
    }, []);


    const onChangeHandler = (e) => {
        e.preventDefault();
        setShippingAddress(e.target.value);
    }
    const onDescriptionChangeHandler = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    const onCheckoutHandler = async () => {
        // console.log("product adding",); 
        const _confirm = window.confirm("Are you sure you want to Buy the items?");
        if (!_confirm) { return }
        // console.log("authctx", authCtx.user) 
        if (!authCtx.isLoggedIn) {
            alert("You are not logged in. You need to login before adding to cart");
            // navigate('/login');
            return;
        }
        if (!authCtx.isLoggedIn) {
            return;
        }
        if (!authCtx.user['accessToken']) {
            alert('somethig went wrong please login first');
            // navigate('/login');
            authCtx.logOut();
        }
        if (!cartItems.length) {
            alert("Cart List is empty. Cannot Checkout.");
            return;
        }

        let products = cartItems.map((cart) => {
            return {
                orderId: '',
                productId: cart.id,
                quantity: cart.quantity,
                price: cart.price,
                amount: cart.quantity * cart.price,
                name: cart.productName

            }
        });


        // console.log("PRODUCTS",products);
        // return;

        let reqBody = {
            userId: authCtx.user.id,
            totalPrice: 0,
            totalItems: cartItems.length,
            status: "PENDING",

            shippingAddress: shippingAddress ? shippingAddress : "",
            description: description ? description : '',
            products: products
        }
        const response = await axios.post(environment.apiUrl + 'order/addOrderItems', reqBody, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        });
        // console.log("adding", response.data);
        const { data } = response;
        // console.log("DATA",data);
        if (data.status === 'error') {
            alert(data.message);
        }
        if (data.status === 'ok') {
            alert("Thankyou for buying products. Your product is on the way.");
            onGetCartItems();


        }
    }



    const onCountryChangeHandler = () => { }
    return <React.Fragment>
        <Banner name="my cart" parentName='home' parentUrl='/home' />
        <section className="ftco-section ftco-cart">
            <div className="container">
            <div className=' text-center'>
                        { !authCtx.isLoggedIn  &&  <div className="alert alert-danger" role="alert">
                           You are not logged in.
                        </div>}

                    </div>
                <div className="row">
    
                    <div className="col-md-12 ftco-animated">
                        <div className="cart-list">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        cartItems.length > 0 &&
                                        cartItems.map((item) => {
                                            return <tr key={item.id} className="text-center">
                                                <td className="product-remove"><Link onClick={() => { onDeleteItem(item) }}><span className="ion-ios-close"></span></Link></td>

                                                <td className="image-prod"><div className={`${classes['product-img']} img`}></div></td>

                                                <td className="product-name">
                                                    <h3>{item.productName}</h3>
                                                    <p>{item.description}</p>
                                                </td>

                                                <td className="price">${item.price}</td>

                                                <td className="quantity">
                                                    <div className="input-group mb-3">
                                                        <input type="text" name="quantity" readOnly value={item.quantity} onChange={onCountryChangeHandler} className="quantity form-control input-number" min="1" max="100" />
                                                    </div>
                                                </td>

                                                <td className="total">${item.price * item.quantity}</td>
                                            </tr>
                                        })

                                    }

                                    {
                                        cartItems.length === 0 && <tr>
                                            <td colSpan={'5'}>No any items added.</td>
                                        </tr>
                                    }



                                    {/* <tr className="text-center">
                                        <td className="product-remove"><a><span className="ion-ios-close"></span></a></td>

                                        <td className="image-prod"><div className={`${classes['product-img']} img`}></div></td>

                                        <td className="product-name">
                                            <h3>Bell Pepper</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>

                                        <td className="price">$4.90</td>

                                        <td className="quantity">
                                            <div className="input-group mb-3">
                                                <input type="text" name="quantity" onChange={onCountryChangeHandler} className="quantity form-control input-number" value="1" min="1" max="100" />
                                            </div>
                                        </td>

                                        <td className="total">$4.90</td>
                                    </tr> */}
                                    {/* <!-- END TR--> */}

                                    {/* <tr className="text-center">
                                        <td className="product-remove"><a><span className="ion-ios-close"></span></a></td>


                                        <td className="image-prod"><div className={`${classes['product-img']} img`} ></div></td>

                                        <td className="product-name">
                                            <h3>Bell Pepper</h3>
                                            <p>Far far away, behind the word mountains, far from the countries</p>
                                        </td>

                                        <td className="price">$15.70</td>

                                        <td className="quantity">
                                            <div className="input-group mb-3">
                                                <input type="text" name="quantity" className="quantity form-control input-number" onChange={onCountryChangeHandler} value="1" min="1" max="100" />
                                            </div>
                                        </td>

                                        <td className="total">$15.70</td>
                                    </tr> */}
                                    {/* <!-- END TR--> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <div className="col-lg-2 mt-5 cart-wrap ftco-animated">
                        {/* <div className="cart-total mb-3">
    					<h3>Coupon Code</h3>
    					<p>Enter your coupon code if you have one</p>
  						<form action="#" className="info">
	              <div className="form-group">
	              	<label htmlFor="coupon">Coupon code</label>
	                <input type="text" id='coupon' className="form-control text-left px-3" placeholder=""/>
	              </div>
	            </form>
    				</div>
    				<p><Link to={''} className="btn btn-primary py-3 px-4">Apply Coupon</Link></p> */}
                    </div>
                    <div className="col-lg-6 mt-5 cart-wrap ftco-animated">
                        <div className="cart-total mb-3">
                            <h3>Enter shipping Address</h3>
                            <p>Enter your destination to get a shipping estimate</p>
                            <form action="#" className="info">
                                <div className="form-group">
                                    <label htmlFor='country'>Address</label>
                                    <input type="text" id="country" placeholder='Unit 2 624 George Street, South Windsor, NSW 2756' className="form-control text-left px-3" value={shippingAddress} onChange={onChangeHandler} />
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="state">Contact</label>
                                    <input type="text" id='state' className="form-control text-left px-3" onChange={onCountryChangeHandler} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Zip/Postal Code</label>
                                    <input type="text" className="form-control text-left px-3" onChange={onCountryChangeHandler} placeholder="" />
                                </div> */}
                            </form>
                        </div>


                        <div className="cart-total mb-3">

                            <form action="#" className="info">
                                <div className="form-group">
                                    <label htmlFor='description'>Description</label>
                                    <input type="text" id="description" placeholder='Unit 2 624 George Street, South Windsor, NSW 2756' className="form-control text-left px-3" value={description} onChange={onDescriptionChangeHandler} />
                                </div>

                            </form>
                        </div>
                        {/* <p><Link to={''} className="btn btn-primary py-3 px-4">Estimate</Link></p> */}
                    </div>
                    <div className="col-lg-4 mt-5 cart-wrap ftco-animated">
                        <div className="cart-total mb-3">
                            <h3>Cart Totals</h3>
                            <p className="d-flex">
                                <span>Subtotal</span>
                                <span>{'$' + totalAmt}</span>
                            </p>
                            <p className="d-flex">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </p>
                            {/* <p className="d-flex">
    						<span>Discount</span>
    						<span>$3.00</span>
    					</p> */}
                            <hr />
                            <p className="d-flex total-price">
                                <span>Total</span>
                                <span>{'$' + totalAmt}</span>

                            </p>
                        </div>
                        <p><Link className="btn btn-primary py-3 px-4" onClick={onCheckoutHandler}>Checkout</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
}
export default Cart;