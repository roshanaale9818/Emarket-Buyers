// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/shared/Navbar';
import './util/css/animate.css';
import './util/css/aos.css';
import './util/css/bootstrap.min.css';
import './util/css/flaticon.css';
import './util/css/style.css';
import './util/css/bootstrap-datepicker.css';
import './util/css/icomoon.css';
import './util/css/open-iconic-bootstrap.min.css'
import './util/css/owl.carousel.min.css';
import './util/css/owl.theme.default.min.css';
import './util/css/magnific-popup.css';
import './util/css/aos.css';
import './util/css/ionicons.min.css';
import './util/css/bootstrap-datepicker.css';
import './util/css/jquery.timepicker.css';
import routes from './router/Routes';
import { RouterProvider } from 'react-router-dom';
import LoaderProvider from './store/LoaderProvider';
import Loader from './components/shared/Loader/Loader';
import AuthProvider from './store/loggedin/AuthProvider';

function App() {
  return (
    // <div className="App">
    //   <Navbar></Navbar>
    //   <Home />



    //   <Footer/>

    // </div>
    <AuthProvider>
      <LoaderProvider>
        <Loader />
        <RouterProvider router={routes}></RouterProvider>
      </LoaderProvider>
    </AuthProvider>

  );
}

export default App;
