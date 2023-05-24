import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import Main from '../components/main/Main';
import ErrorPage from '../components/shared/ErrorPage/ErrorPage';
import AboutUs from '../components/aboutus/AboutUs';
import ContactUs from '../components/contact/ContactUs';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Profile from '../components/profile/Profile';
import ProductSearch from '../components/product-search/ProductSearch';
import Cart from '../components/cart/Cart';

const routes = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        // { path: '/', element: <Home /> },
        { index: true, element: <Home /> },
        { path: '/home', element: <Home /> },
        {path:'/aboutus',element:<AboutUs/>},
        {path:'/contactus',element:<ContactUs/>},
        {path:'/login',element:<Login/>},
        {path:'/signup',element:<Register/>},
        {path:'/profile',element:<Profile/>},
        {path:'/product-search',element:<ProductSearch/>},
        {path:'/cart',element:<Cart/>}

        // { path: '/productdetails/:productId', element: <ProductDetail></ProductDetail> },
      ],
    
    },
    
  ]);
  export default routes;