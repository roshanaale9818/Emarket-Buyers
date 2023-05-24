
import { useReducer } from 'react';
import LoggedInContext from './loggedin-context';
import AuthContext from './loggedin-context';

const defaultAuthState ={
    isLoggedIn:false,
    currentUser:null
}
const authReducer = (state,action)=>{
    console.log("STATE and ACTion",state,action)
    if(action.type==='LOGIN'){
        return {
            isLoggedIn:true,
            currentUser:action.user,
            user:action.user
        }
    }
    if(action.type==='LOGOUT'){
        localStorage.clear();
        return {
            isLoggedIn:false,
            currentUser:null,
            user:null
        }
    }
    return  LoggedInContext;
}

const AuthProvider = props => {
    const [authState,dispacthLoaderAction]=useReducer(authReducer,defaultAuthState);
 
     const loginHandler = (user) =>{
         dispacthLoaderAction({
             type:'LOGIN',
             user:user,
             isLoggedIn:true
         })
     };
     const logOutHandler = () =>{
         dispacthLoaderAction({
             type:'LOGOUT',
             user:null,
             isLoggedIn:false
         })
     };
 
     const authContext = {
        isLoggedIn: JSON.parse(localStorage.getItem('user')) ? true:authState.isLoggedIn,
        logIn:loginHandler,
        logOut:logOutHandler,
        user:JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):null

     }
     return <AuthContext.Provider value={authContext}>
         {props.children}
     </AuthContext.Provider>
 };
 export default AuthProvider;