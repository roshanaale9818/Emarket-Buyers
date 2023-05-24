import React,{useContext} from 'react';
import Banner from '../banner/Banner';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import useInput from '../../hooks/use-input';
import { isEmail, isNotEmpty, isNotLessThanSix } from '../shared/form-logics/form-logic';
import LoaderContext from '../../store/loader-context';
import axios from 'axios';
import environment from '../../environment/environment';
import AuthContext from '../../store/loggedin/loggedin-context';
// const isNotEmpty = (value) => value.trim() !== '';
// const isNotLessThanSix = (value)=> value.trim() !== '' && value.trim().value > 6;
// const isEmail = (value) => value.includes('@');



const Login = () => {
    const navigate = useNavigate();
    const loaderCtx = useContext(LoaderContext);
    const onShowLoaderHandler = ()=>{
        loaderCtx.show();
    }
    const onHideLoaderHandler = ()=>{
        loaderCtx.hide();
    }

    const authCtx=useContext(AuthContext);
    // console.log('authCTX',authCtx)

    // email 
    const {
        value: usernameValue,
        isValid: emailIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameBlurHandler,
        reset: resetUsername,
      } = useInput(isNotEmpty);
      

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

      
      }

    
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        if(!formIsValid){return}
        onShowLoaderHandler();

        console.log("Submitted", usernameValue,passwordValue);
        axios.post(`${environment.apiUrl}auth/signin`,{
            username:usernameValue,
            password:passwordValue
        }).then((response)=>{
            console.log("response",response);
            if(response.data['status']==='ok'){
                // console.log();
                alert("login success");
                localStorage.setItem('user',JSON.stringify(response['data'].data));
                const user = response['data'].data;
                authCtx.logIn(user);
                onHideLoaderHandler();
                navigate('/profile')
            }
            else{
                alert(response['data'].message);
                onHideLoaderHandler();

            }

        }).catch((error)=>{
            alert("Something went wrong");
            console.error(error);
            onHideLoaderHandler();

        })
        // resetUsername();
        // resetPassword();
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
                                <label htmlFor='email'>Username</label>
                                <input id="email" type="text" className={`form-control ${usernameHasError && 'invalid'}`} value={usernameValue} 
                                onChange={usernameChangeHandler} 
                                onBlur={usernameBlurHandler}
                                placeholder="Your username" />

                                {usernameHasError && <p className='error-text'>
                                    Username is required.
                                    </p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor='password'>Password</label>
                                <input type="password" className={`form-control ${passwordHasError && 'invalid'}`}
                                id="password"  value={passwordValue} 
                                onChange={passwordChangeHandler} 
                                onBlur={passwordBlurHandler}
                                placeholder="password" />

                                {/* {<i className='eye-minus'></i>} */}
                                {/* <span class="icon-eye-blocked"></span>
                                <span class="icon-eye-minus"></span>                                 */}
                                {passwordHasError && <p className='error-text'>
                                    Password is required.
                                    </p>}
                            </div>

                            <div className="form-group d-flex justify-content-center">
                                <button type="button" value="Login" onClick={onSubmitHandler} className="btn btn-primary py-3 px-5">
                                    Login
                                    </button>
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