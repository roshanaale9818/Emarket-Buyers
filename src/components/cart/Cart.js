import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import classes from './Cart.module.css';
import axios from 'axios';
import environment from '../../environment/environment';
import AuthContext from '../../store/loggedin/loggedin-context';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartChanged,setCartChanged]=useState([]);
    const authCtx = useContext(AuthContext);
    const onDeleteItem = (item)=>{
        if (!authCtx.user) {
            alert("Something went wrong.Please login again");
            authCtx.logOut();
        }
        let _confirm = window.confirm("Are you sure you want to delete"+ item.productName+' from your cart ?')

        if(!_confirm){
            return;
        }
        axios.post(environment.apiUrl + 'cart/deletecartitem', {
            userId: String(authCtx.user.id),
            userCartId:item.id
        }, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        }).then((response) => {
            console.log("response",response)
            if (response.data.status === 'ok') {
                // console.log('sa',response.data.data);
                // setCartItems(response.data.data);
                // console.log("Cart Items", cartItems);
                alert("Cart item deleted successsfull.");
                onGetCartItems();
            }
            else {
                alert("Something went wrong");
            }
        }).catch((err) => {
            alert("Something went wrong please try again later.")
            console.error(err)
        })
    }
    const onGetCartItems = (prop) => {
        if (!authCtx.user) {
            alert("Something went wrong.Please login again");
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
            console.log("response",response)
            if (response.data.status === 'ok') {
                console.log('sa',response.data.data);
                setCartItems(response.data.data);
                console.log("Cart Items", cartItems);
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
    },[]);



    const onCountryChangeHandler = () => { }
    return <React.Fragment>
        <Banner name="my cart" parentName='home' parentUrl='/home' />
        <section className="ftco-section ftco-cart">
            <div className="container">
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
                                        cartItems.map((item)=>{
                                            return <tr key={item.id} className="text-center">
                                            <td className="product-remove"><Link onClick={()=>{onDeleteItem(item)}}><span className="ion-ios-close"></span></Link></td>
    
                                            <td className="image-prod"><div className={`${classes['product-img']} img`}></div></td>
    
                                            <td className="product-name">
                                                <h3>{item.productName}</h3>
                                                <p>{item.description}</p>
                                            </td>
    
                                            <td className="price">${item.price}</td>
    
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input type="text" name="quantity" value={item.quantity} onChange={onCountryChangeHandler} className="quantity form-control input-number"  min="1" max="100" />
                                                </div>
                                            </td>
    
                                            <td className="total">{item.price * item.quantity}</td>
                                        </tr>
                                        })

                                    }

                                    {
                                        cartItems.length === 0 &&  <tr>
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
                                    <input type="text" id="country" className="form-control text-left px-3" onChange={onCountryChangeHandler} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="state">Contact</label>
                                    <input type="text" id='state' className="form-control text-left px-3" onChange={onCountryChangeHandler} placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Zip/Postal Code</label>
                                    <input type="text" className="form-control text-left px-3" onChange={onCountryChangeHandler} placeholder="" />
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
                                <span></span>
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
                                <span></span>
                            </p>
                        </div>
                        <p><Link to={'/'} className="btn btn-primary py-3 px-4">Order</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
}
export default Cart;