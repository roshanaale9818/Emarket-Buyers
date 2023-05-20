import React from 'react';
import Banner from '../banner/Banner';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import { isEmail, isNotLessThanSix } from '../shared/form-logics/form-logic';
// const isNotEmpty = (value) => value.trim() !== '';
// const isNotLessThanSix = (value)=> value.trim() !== '' && value.trim().value > 6;
// const isEmail = (value) => value.includes('@');
const Login = (props) => {
    const navigate = useNavigate();

    // email 
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
      } = useInput(isEmail);
      

    // password 
      const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
      } = useInput(isNotLessThanSix);

      let formIsValid = false;


      if (emailIsValid && passwordIsValid ) {
        formIsValid = true;
        if (!formIsValid) {
            return;
          }

          console.log("Submitted", emailValue,passwordValue)

          resetEmail();
          resetPassword();
      
      }

    
    const onSubmitHandler = (e)=>{
        e.preventDefault();
    }
    const onGotoRegisterHandler  = (e)=>{
        e.preventDefault();
        navigate('/signup')
    }
    return <React.Fragment>
        <Banner name='Login' parentUrl='/home' parentName='Emarket /' />
        <section className="ftco-section contact-section bg-light">
            <div className="container">
                <div className="row block-9 justify-content-center">
                    <div className="col-12 col-md-6 order-md-last d-flex">
                        <form onSubmit={onSubmitHandler} className="bg-white p-5 contact-form">
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input id="email" type="text" className={`form-control ${emailHasError && 'invalid'}`} value={emailValue} 
                                onChange={emailChangeHandler} 
                                onBlur={emailBlurHandler}
                                placeholder="Your email" />

                                {emailHasError && <p className='error-text'>
                                    Email is required.
                                    </p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Password</label>
                                <input type="password" className={`form-control ${passwordHasError && 'invalid'}`}
                                id="password"  value={passwordValue} 
                                onChange={passwordChangeHandler} 
                                onBlur={passwordBlurHandler}
                                placeholder="password" />
                                
                                {passwordHasError && <p className='error-text'>
                                    Password is required.
                                    </p>}
                            </div>

                            <div className="form-group d-flex justify-content-center">
                                <input type="submit" value="Login" className="btn btn-primary py-3 px-5" />
                            </div>
                            <div className={`register`}>
                                <div className={`text-center`}>
                                    or
                                </div>
                                <div className={`text-center mt-2`}>
                                <button type="button" onClick={onGotoRegisterHandler}  className="btn btn-secondary py-3 px-5" >
                                    Register
                                </button>

                                </div>
                            </div>
                        </form>

                    </div>
                    {/* 
          <div className="col-md-6 d-flex">
          	<div id="map" className="bg-white"></div>
          </div> */}
                </div>
            </div>
        </section>
    </React.Fragment>
}
export default Login;