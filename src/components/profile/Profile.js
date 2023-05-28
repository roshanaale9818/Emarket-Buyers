import React, { useContext } from "react"
import AuthContext from "../../store/loggedin/loggedin-context";
import './Profile.css';
import { useNavigate } from "react-router-dom";
import OrderList from "../orders/OrdersList";
const Profile = (props) => {
    const navigator = useNavigate();
    const authCtx = useContext(AuthContext);
    console.log("Currenet user ", authCtx)
    const onLogoutHandler = ()=>{
        const con = window.confirm("Are you sure you want to logout ?");

        if(con===true){
            authCtx.logOut();
            navigator('/home');
        }
}
    return <React.Fragment>

        {
            authCtx.isLoggedIn === true && <section className="profile-wrap">
                <div>
                    <h1> Welcome, {authCtx.user.firstName} {authCtx.user.lastName} ({authCtx.user.username}) </h1>
                </div>
                <div>
                    <h1> Your Email: {authCtx.user.email} </h1>

                </div>
                <div>
                    <h1> Your Contact: {authCtx.user.contact} </h1>

                </div>
                <div>
                    <button type="button" onClick={onLogoutHandler} className="btn btn-danger">Logout</button>
                </div>

                <OrderList/>






            </section>
        }
    </React.Fragment>
}
export default Profile;