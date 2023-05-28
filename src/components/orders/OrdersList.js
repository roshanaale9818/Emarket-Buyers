import React, { useContext, useEffect, useState } from "react";
// import Banner from "../banner/Banner";
// import { isNotEmpty } from "../shared/form-logics/form-logic";
// import useInput from "../../hooks/use-input";
import classes from './Orders.module.css';
import axios from "axios";
import environment from "../../environment/environment";
import LoaderContext from "../../store/loader-context";
import AuthContext from "../../store/loggedin/loggedin-context";
import { useNavigate } from 'react-router-dom';
const OrderList = (props) => {
    const loaderCtx = useContext(LoaderContext);
    const authCtx = useContext(AuthContext);
    const [orderList, setorderList] = useState([]);
    useEffect(() => {
        getOrderList();
    }, []);
    const today = new Date();


    const getOrderList = () => {
        if (!authCtx.user) {
            return;
        }

        // event.preventDefault();

        // if (!searchIsValid) {
        //     return;
        // }
        // loaderCtx.show();
        // if()
        axios.post(environment.apiUrl + `order/getorderitems`, { userId: String(authCtx.user.id) }, {
            headers: {
                'x-access-token': authCtx.user.accessToken
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    setTimeout(() => {
                        setorderList(response.data.data);
                        console.log("orderList", orderList);
                        loaderCtx.hide();
                    }, 2000)

                }
            }).catch((error) => {
                console.error(error);
                alert("Something went wrong");
                loaderCtx.hide();
            })
    }



    const navigate = useNavigate();


    return <React.Fragment>
        {/* <Banner name='Product List' parentUrl='/home' parentName='Home ' /> */}
        {/* <section className="ftco-section contact-section bg-light pb-0">
            <div className="container">
                <div className="row block-9">
                    <div className="col-md-12 order-md-last d-flex">
                        <form action="#" onSubmit={onSubmitHandler} className="bg-white p-5 contact-form">
                            <div className='row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor='name'>Product Name</label>
                                    <input type="text" id='name'
                                        value={searchValue || ''}
                                        onChange={searchChangeHandler}
                                        onBlur={searchBlurHandler}
                                        className={`form-control ${searchHasError && 'invalid'}`} placeholder="Product Name Eg. Grilled Cheese" />

                                    {searchHasError && <p className='error-text'>
                                        Name is required.
                                    </p>}
                                </div>
                            </div>

                            <div className='row mt-4'>
                                <div className="form-group col-md-4 d-flex">
                                    <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" />
                                    <input type="button" onClick={onResetHandler} value="Reset Form" className="btn btn-danger py-3 px-5 ml-2" />
                                </div>


                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </section> */}

        <section className="ftco-section contact-section bg-light">
            <div className="container">
                <div className={classes.heading}>
                    <h2>Your Orders As of {today.toLocaleDateString()}</h2>
                </div>
                <div className="row">
                    <table className={`table ${classes['table-bottom']}`}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Description</th>
                                <th scope="col">Shipping Address</th>
                                <th scope="col">Total Items</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Order on</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>

                                {/* <th scope="col">Price</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderList.length === 0 ? (<tr className="text-center" key={Math.round(123)}><td colSpan='6' >No data available.</td></tr>) : null}

                            {
                                orderList.length > 0 && orderList.map((order, index) => {
                                    return <tr key={order.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.description}</td>
                                        <td>{order.shippingAddress}</td>
                                        <td>{order.totalItems}</td>
                                        <td>{order.totalPrice}</td>
                                        <td>{order.createdAt.toString().split("T")[0]}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            {/* <button className="btn btn-primary" onClick={()=>{onAddProductToCart(product)}}>Add to Cart</button>
                                            <button className="ml-3 btn btn-warning" onClick={()=>{onViewProduct(product)}}>View Product</button> */}
                                            <button className="ml-3 btn btn-warning">View Products</button>
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                    </table>



                </div>
            </div>
        </section>
    </React.Fragment>
};
export default OrderList;