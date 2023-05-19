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
import {RouterProvider} from 'react-router-dom';

function App() {
  return (
// <div className="App">
    //   <Navbar></Navbar>
    //   <Home />


    //   {/* <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div> */}

    //   <Footer/>

    // </div>
     <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
