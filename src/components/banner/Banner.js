import React from "react";
import classes from './Banner.module.css';
import { Link } from "react-router-dom";

const Banner = (props)=>{
return <React.Fragment>
       <div className={`hero-wrap hero-bread ${classes.banner}` }>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">
          <div className="col-md-9 ftco-animated text-center">
          	<p className="breadcrumbs"><span className={`mr-2`}><Link to={props.parentUrl} className={classes.parentRoute}>{props.parentName}</Link></span> <span>{props.name}</span></p>
            <h1 className="mb-0 bread">{props.name}</h1>
          </div>
        </div>
      </div>
    </div>
</React.Fragment>
}
export default Banner;