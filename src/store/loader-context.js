import React from 'react';
const LoaderContext = React.createContext({
    isShowing:false,
    show:()=>{},
    hide:()=>{}
});
export default LoaderContext;
