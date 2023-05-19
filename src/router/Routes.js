import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import Main from '../components/main/Main';
import ErrorPage from '../components/shared/ErrorPage/ErrorPage';

const routes = createBrowserRouter([
    {
      path:'/',
      element:<Main/>,
      errorElement:<ErrorPage/>,
      children:[
        // { path: '/', element: <Home /> },
        { index: true, element: <Home /> },
        // { path: '/productdetails/:productId', element: <ProductDetail></ProductDetail> },
      ],
    
    },
    
  ]);
  export default routes;