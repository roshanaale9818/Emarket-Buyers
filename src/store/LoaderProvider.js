import LoaderContext from "./loader-context";
import { useReducer } from 'react';

const defaultLoaderState ={
    isShowing:false
}
const loaderReducer = (state,action)=>{
    if(action.type==='SHOW'){
        return {
            isShowing:true
        }
    }
    if(action.type==='HIDE'){
        return {
            isShowing:false
        }
    }
    return  defaultLoaderState;
}

const LoaderProvider = props => {
    const [loaderState,dispacthLoaderAction]=useReducer(loaderReducer,defaultLoaderState);
 
     const showLoaderHandler = () =>{
         dispacthLoaderAction({
             type:'SHOW'
         })
     };
     const hideLoaderHandler = () =>{
         dispacthLoaderAction({
             type:'HIDE'
         })
     };
 
     const loaderContext = {
        isShowing:loaderState.isShowing,
        show:showLoaderHandler,
        hide:hideLoaderHandler
     }
     return <LoaderContext.Provider value={loaderContext}>
         {props.children}
     </LoaderContext.Provider>
 };
 export default LoaderProvider;