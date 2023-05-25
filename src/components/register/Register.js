import React, { useContext } from 'react';
import Banner from '../banner/Banner';
import useInput from '../../hooks/use-input';
import { isEmail, isNotEmpty, isNotLessThanSix } from '../shared/form-logics/form-logic';
import environment from '../../environment/environment';
import axios from 'axios';
import LoaderContext from '../../store/loader-context';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate();

    const loaderCtx = useContext(LoaderContext);
    const onShowLoaderHandler = ()=>{
        loaderCtx.show();
    }
    const onHideLoaderHandler = ()=>{
        loaderCtx.hide();
    }
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(isNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);


    const {
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressInputBlurHandler,
        reset: resetAddress,
    } = useInput(isNotEmpty);

    const {
        value: contactValue,
        isValid: contactIsValid,
        hasError: contactHasError,
        valueChangeHandler: contactChangeHandler,
        inputBlurHandler: contactInputBlurHandler,
        reset: resetContact,
    } = useInput(isNotEmpty);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordInputBlurHandler,
        reset: resetPassword,
    } = useInput(isNotLessThanSix);

       let {
        value: stateValue,
        isValid: stateIsValid,
        hasError: stateHasError,
        valueChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetState,
    } = useInput(isNotEmpty);


    const {
        value: confirmPasswordValue,
        isValid: confirmPasswordIsValid,
        hasError: confirmPasswordHasError,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordInputBlurHandler,
        reset: resetConfirmPassword,
    } = useInput(isNotLessThanSix);
    const {
        value: usernameValue,
        isValid: usernameIsValid,
        hasError: usernameHasError,
        valueChangeHandler: usernameChangeHandler,
        inputBlurHandler: usernameInputBlurHandler,
        reset: resetUsername,
    } = useInput(isNotEmpty);
    let formIsValid = false;
    if(passwordIsValid&& confirmPasswordIsValid && addressIsValid && contactIsValid &&
        firstNameIsValid && lastNameIsValid && emailIsValid && usernameIsValid){
            formIsValid = true;
        }

        



    const onResetHandler = (e)=>{
        e.preventDefault();
        resetFirstName();
        resetAddress();
        resetLastName();
        resetContact();
        resetEmail();
        resetPassword();
        resetConfirmPassword();
        resetUsername();
        resetState();
    }



    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(!formIsValid){
            return;
        }
        if(passwordValue !== confirmPasswordValue){
            alert("Password donot match");
            return;
        }
        onShowLoaderHandler();


        axios.post(`${environment.apiUrl}auth/signup`,{
            username:usernameValue,
            password:passwordValue,
            email:emailValue,
            firstName:firstNameValue,
            lastName:lastNameValue,
            contact:contactValue,
            address:addressValue,
            state:stateValue
        }).then((response)=>{
            console.log("response",response);
            if(response.data['status']==='ok'){
                // console.log();
                alert("Signup success");
                // localStorage.setItem('user',JSON.stringify(response['data'].data))
                onHideLoaderHandler();
                navigate('/login')
                
            }
            else{
                alert(response['data'].message);
                onHideLoaderHandler();

            }

        }).catch((error)=>{
            alert(error.response.data.message);
            console.error(error);
            onHideLoaderHandler();

        })

        // console.log("VALID")
        



    }
    return <React.Fragment>
        <Banner name='Register' parentUrl='/login' parentName='Login /' />
        <section className="ftco-section contact-section bg-light">
            <div className="container">
                <div className="row block-9">
                    <div className="col-md-12 order-md-last d-flex">
                        <form action="#" onSubmit={onSubmitHandler} className="bg-white p-5 contact-form">
                            <div className='row'>
                            <div className="form-group col-md-6">
                                    <label htmlFor='name'>Username</label>
                                    <input type="text" id='name'
                                        value={usernameValue}
                                        onChange={usernameChangeHandler}
                                        onBlur={usernameInputBlurHandler}
                                        className={`form-control ${usernameHasError && 'invalid'}`} placeholder="John12" />

                                    {usernameHasError && <p className='error-text'>
                                        User Name is required.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='name'>First Name</label>
                                    <input type="text" id='name'
                                        value={firstNameValue}
                                        onChange={firstNameChangeHandler}
                                        onBlur={firstNameBlurHandler}
                                        className={`form-control ${firstNameHasError && 'invalid'}`} placeholder="John" />

                                    {firstNameHasError && <p className='error-text'>
                                        First Name is required.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='lname'>Last Name</label>
                                    <input type="text" id='lname' className={`form-control ${lastNameHasError && 'invalid'}`}
                                        value={lastNameValue}
                                        onChange={lastNameChangeHandler}
                                        onBlur={lastNameBlurHandler}
                                        placeholder="Doe" />

                                    {lastNameHasError && <p className='error-text'>
                                        Last Name is required.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='addr'>Address</label>
                                    <input type="text" id='addr'
                                        value={addressValue}
                                        onChange={addressChangeHandler}
                                        onBlur={addressInputBlurHandler}
                                        className={`form-control ${addressHasError && 'invalid'}`} placeholder="624 George Street NSW 2726" />

                                    {addressHasError && <p className='error-text'>
                                        Address is required.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='state'>State</label>
                                    <input type="text" id='state'
                                        value={stateValue}
                                        onChange={stateChangeHandler}
                                        onBlur={stateBlurHandler} className={`form-control ${stateHasError && 'invalid'}`} placeholder="Eg. New South Wales " />
                                    {contactHasError && <p className='error-text'>
                                        State should be valid.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='contact'>Contact</label>
                                    <input type="number" id='contact'
                                        value={contactValue}
                                        onChange={contactChangeHandler}
                                        onBlur={contactInputBlurHandler} className={`form-control ${contactHasError && 'invalid'}`} placeholder="+60123232323" />
                                    {contactHasError && <p className='error-text'>
                                        Contact should be valid.
                                    </p>}
                                </div>

                            
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>

                                <input type="text" id='email' className={`form-control ${emailHasError && 'invalid'}`}
                                    value={emailValue}
                                    onChange={emailChangeHandler}
                                    onBlur={emailBlurHandler}
                                    placeholder="abc@abc.com" />
                                {emailHasError && <p className='error-text'>
                                    Email is required.
                                </p>}
                            </div>
                            <div className='row'>
                                <div className="form-group col-md-6">
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" id='password'
                                        value={passwordValue}
                                        onChange={passwordChangeHandler}
                                        onBlur={passwordInputBlurHandler}
                                        className={`form-control ${passwordHasError && 'invalid'}`} placeholder="password" />
                                    {passwordHasError && <p className='error-text'>
                                        Password is required and must be greater than 6 words.
                                    </p>}
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor='cpassword'>Confirm Password</label>
                                    <input type="password" id='cpassword'
                                        value={confirmPasswordValue}
                                        onChange={confirmPasswordChangeHandler}
                                        onBlur={confirmPasswordInputBlurHandler}
                                        className={`form-control ${confirmPasswordHasError && 'invalid'}`} placeholder="password" />
                                    {confirmPasswordHasError && <p className='error-text'>
                                        Confirm Password is required and must be greater than 6 characters.
                                    </p>}
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className="form-group col-md-4 d-flex">
                                    <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" />
                                    <input type="button" onClick={onResetHandler} value="Reset Form" className="btn btn-danger py-3 px-5 ml-2" />
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
export default Register;