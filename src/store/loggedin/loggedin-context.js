import React from 'react';
console.log(JSON.parse(localStorage.getItem('user')) )
const AuthContext = React.createContext({
    isLoggedIn:false,
    logIn:(user)=>{},
    logOut:()=>{},
    currentUser:JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):null
});
export default AuthContext;
