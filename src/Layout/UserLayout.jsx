import React, {useEffect} from 'react';
import NavBar from "../Components/Navbar/NavBar";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import './Layout.css'
import {Outlet} from "react-router-dom";
import 'aos/dist/aos.css'
import Aos from "aos";

const UserLayout = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <div className={'all-layout'}>
            <div className="nav">
                <NavBar/>
            </div>
            <div className={"outlet"}>
                <Outlet/>
            </div>
            <Main/>
            <Footer/>
        </div>
    );
};

export default UserLayout;