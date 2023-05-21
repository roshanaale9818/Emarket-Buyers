import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../shared/Navbar/Navbar';
import Footer from "../shared/Footer/Footer";

const Main = (props) => {
    return <React.Fragment>
        <main>
            <Navbar />
            <Outlet />
            <Footer />


        </main>
    </React.Fragment>;
}
export default Main;