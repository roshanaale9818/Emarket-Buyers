// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
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
import Home from './components/home/Home';

import { useEffect } from 'react';
import Footer from './components/Footer/Footer';
function loadScript(url, callback) {

  let script = document.createElement("script")
  script.type = "text/babel";

  if (script.readyState) {  //IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    console.log("Loading")
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("body")[0].appendChild(script);
}

function App() {
  // "./util/js/jquery.min.js",
  // "./util/js/jquery-migrate-3.0.1.min.js",
  // "./util/js/popper.min.js",
  // "./util/js/bootstrap.min.js",
  // "./util/js/jquery.easing.1.3.js",
  // "./util/js/jquery.waypoints.min.js",
  // "./util/js/jquery.stellar.min.js",
  // "./util/js/owl.carousel.min.js",
  // "./util/js/jquery.magnific-popup.min.js",
  // "./util/js/aos.js",
  // "./util/js/jquery.animateNumber.min.js",
  // "./util/js/bootstrap-datepicker.js",
  // "./util/js/scrollax.min.js",
  // "./util/js/main.js"
  let jsScripts = [
  
  ]
  jsScripts=[]
  useEffect(() => {
    jsScripts.map((script)=>{
      // console.log("mapping"); 
      loadScript(script,()=>{});
      return ()=>{}
    })
  });
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home />


      {/* <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div> */}

      <Footer/>

    </div>
  );
}

export default App;
