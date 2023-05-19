
import React,{useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import classes from './ErrorPage.module.css';
const ErrorPage = (props)=>{   
     return <React.Fragment>
            <main>
            <Navbar/>
                <div className={classes['error-wrap']}>
                <h1>Oops!! could not found page.</h1>
                </div>
            <Footer/>
            </main>
        </React.Fragment>
}
export default ErrorPage;