import React, { useContext, useEffect, useState } from "react";
import Banner from "../banner/Banner";
import { isNotEmpty } from "../shared/form-logics/form-logic";
import useInput from "../../hooks/use-input";
import axios from "axios";
import environment from "../../environment/environment";
import LoaderContext from "../../store/loader-context";
import AuthContext from "../../store/loggedin/loggedin-context";
import { useNavigate } from 'react-router-dom';
const ProductList = (props) => {
    const loaderCtx = useContext(LoaderContext);
    const authCtx = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProductList();
    },[]);

    let {
        value: searchValue,
        isValid: searchIsValid,
        // hasError: searchHasError,
        // valueChangeHandler: searchChangeHandler,
        // inputBlurHandler: searchBlurHandler,
        // reset: resetSearch,
    } = useInput(isNotEmpty);
    const getProductList = () => {
        // event.preventDefault();

        // if (!searchIsValid) {
        //     return;
        // }
        loaderCtx.show();
        axios.get(environment.sellersUrl + `products`)
            .then((response) => {
                if (response.status === 200) {
                    setTimeout(() => {
                        setProducts(response.data.data);
                        console.log("products", products);
                        loaderCtx.hide();
                    }, 2000)

                }
            }).catch((error) => {
                console.error(error);
                alert("Something went wrong");
                loaderCtx.hide();
            })
    }

    const onAddProductToCart = async (product) => {
        console.log("product adding", product);
        const _confirm = window.confirm("Are you sure you want to add into your cart?");
        if (!_confirm) { return }
        console.log("authctx", authCtx.user)
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
        // console.log("adding", response.data);
        const { data } = response;
        // console.log("DATA",data);
        if (data.status === 'error') {
            alert(data.message);
        }
        if(data.status ==='ok'){
            alert("Item added to cart successfull.")
        }
    }
    // const onSubmitHandler = (event) => {
    //     event.preventDefault();

    //     if (!searchIsValid) {
    //         return;
    //     }
    //     loaderCtx.show();
    //     axios.get(environment.sellersUrl + `products?search=${searchValue}&page=1&limit=20`)
    //         .then((response) => {
    //             if (response.status === 200) {
    //                 setTimeout(() => {
    //                     setProducts(response.data.data);
    //                     // console.log("products", products);
    //                     loaderCtx.hide();
    //                 }, 2000)

    //             }
    //         }).catch((error) => {
    //             console.error(error);
    //             alert("Something went wrong");
    //             loaderCtx.hide();
    //         })

    // }
    // if (!searchHasError) {
    //     searchIsValid = true
    // }
    // const onResetHandler = () => {
    //     resetSearch();

    // }
    const navigate = useNavigate();
    const onAddtoCartHandler = () => { }
    const onViewProduct = (product)=>{
        console.log("on view product",product);
        navigate(`/product-detail/${product.id}`)

    }
    return <React.Fragment>
        <Banner name='Product List' parentUrl='/home' parentName='Home ' />
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
                <div className="row">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>

                                {/* <th scope="col">Price</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length === 0 ? (<tr className="text-center" key={Math.round(123)}><td colSpan='6' >No data available.</td></tr>) : null}

                            {
                                products.length > 0 && products.map((product, index) => {
                                    return <tr key={product.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.regular_price}</td>
                                        <td>{product.unit}</td>
                                        <td>{product.status}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={()=>{onAddProductToCart(product)}}>Add to Cart</button>
                                            <button className="ml-3 btn btn-warning" onClick={()=>{onViewProduct(product)}}>View Product</button>

                                        </td>
                                    </tr>
                                })
                            }
                            {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
                        </tbody>
                    </table>



                </div>
            </div>
        </section>
    </React.Fragment>
};
export default ProductList;