import React, { useState, useEffect,useContext } from "react";
import { Link, useNavigation, useParams } from "react-router-dom";
import classes from './ProductDetail.module.css';
import Banner from "../banner/Banner";
import axios from "axios";
import environment from "../../environment/environment";
import LoaderContext from "../../store/loader-context";
import AuthContext from "../../store/loggedin/loggedin-context";
const ProductDetail = () => {
  const loaderCtx = useContext(LoaderContext);
  const authCtx = useContext(AuthContext);
  const [productTitle, setProductTitle] = useState('Product Detail');
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  // console.log('params', params);
  const getProductDetail = () => {
    axios.get(`${environment.sellersUrl}products/${params.productId}`).then((response) => {
      // console.log(response);
      if (response.status === 200) {
        setProductDetail(response.data.data);
        // console.log('Product Detail', productDetail);
      }
    })
  };
  const onAddProductToCart = async (product) => {
    // console.log("product adding", product);
    const _confirm = window.confirm("Are you sure you want to add into your cart?");
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
  useEffect(() => {
    getProductDetail();
  }, [])

  return <React.Fragment>
    <Banner name='Product Detail' parentName='Home' parentUrl='/home' />

    <section className="ftco-section pb-20 ftco-no-pb ftco-no-pt bg-light">
      <div className="container">
        <div className="row">

          <div className={`col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center ${classes.productDetail}`}>
            {/* <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
							<span className="icon-play"></span>
						</a> */}
          </div>
          <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animated">
            <div className="heading-section-bold mb-4 mt-md-5">
              <div className="ml-md-0">
                <h2 className="mb-4">
                  {productDetail && productDetail.name}
                </h2>
                <span>
                  Price : A$ {productDetail && productDetail.sale_price} / {productDetail && productDetail.unit}
                </span>
                <span className="ml-3">
                  Stock Status : {productDetail && productDetail.status_name}
                </span>

              </div>
            </div>
            <div className="pb-md-5">

              <p>
                {productDetail && productDetail.description}
              </p>
              <p><Link onClick={ ()=>{onAddProductToCart(productDetail)}} className="btn btn-primary">Add to Cart</Link></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 
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
    </section> */}
  </React.Fragment>
}
export default ProductDetail;