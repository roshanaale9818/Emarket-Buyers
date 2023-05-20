import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import Main from '../components/main/Main';
import ErrorPage from '../components/shared/ErrorPage/ErrorPage';
import AboutUs from '../components/aboutus/AboutUs';
import ContactUs from '../components/contact/ContactUs';
import Login from '../components/login/Login';
import Register from '../components/register/Register';

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
        {path:'/signup',element:<Register/>}
        // { path: '/productdetails/:productId', element: <ProductDetail></ProductDetail> },
      ],
    
    },
    
  ]);
  export default routes;