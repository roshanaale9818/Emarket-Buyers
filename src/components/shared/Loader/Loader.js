import React, { useState, useContext } from "react";
import LoaderContext from "../../../store/loader-context";
const Loader = (props) => {
    const loaderCtx = useContext(LoaderContext);
    const onBackDivClickHandler = ()=>{
        loaderCtx.hide();

    }       
    // fullscreen
    return <React.Fragment>
        {loaderCtx.isShowing &&
            <div id="ftco-loader" className="show fullscreen" onClick={onBackDivClickHandler}>
                <svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" strokeWidth="4" stroke="#eeeeee" /><circle className="path" cx="24" cy="24" r="22" fill="none" strokeWidth="4" strokeMiterlimit="10" stroke="#F96D00" /></svg>
            </div>}
    </React.Fragment>
}
export default Loader;