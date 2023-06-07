import React, { useContext, useEffect, useState } from "react";
// import Banner from "../banner/Banner";
// import { isNotEmpty } from "../shared/form-logics/form-logic";
// import useInput from "../../hooks/use-input";
import classes from './Orders.module.css';
import axios from "axios";
import environment from "../../environment/environment";
import LoaderContext from "../../store/loader-context";
import AuthContext from "../../store/loggedin/loggedin-context";
import { useNavigate, useParams } from 'react-router-dom';
const OrderProductList = (props) => {

  const params = useParams();

    const loaderCtx = useContext(LoaderContext);
    const authCtx = useContext(AuthContext);
    const [orderList, setorderList] = useState([]);
    useEffect(() => {
        getOrderItems();
    }, []);
    const today = new Date();


    const getOrderItems = () => {
        if (!authCtx.user) {
            return;
        }

        // event.preventDefault();

        // if (!searchIsValid) {
        //     return;
        // }
        // loaderCtx.show();
        // if()
        axios.post(environment.apiUrl + `order/getOrderProductItems`, { userId: String(authCtx.user.id),orderId: params.orderId}, {
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

        <section className={`ftco-section contact-section bg-light ${classes['z-top']}`}>
            <div className="container">
                <div className={classes.heading}>
                    <h2>Your Orders Items</h2>
                </div>
                <div className="row">
                    <table className={`table ${classes['table-bottom']}`}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Name</th>
                                {/* <th scope="col">Shipping Address</th> */}
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Ordered On</th>

                                {/* <th scope="col">Status</th>
                                <th scope="col">Action</th> */}

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
                                        <td>{order.productName}</td>
                                        <td>{order.price}</td>
                                        <td>{order.quantity}</td>
                                        <td>{order.amount}</td>
                                        <td>{order.createdAt.toString().split("T")[0]}</td>
                                        {/* <td>{order.status}</td> */}
                                        {/* <td> */}
                                     
                                            {/* <button className="ml-3 btn btn-warning">View Products</button> */}
                                        {/* </td> */}
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
export default OrderProductList;