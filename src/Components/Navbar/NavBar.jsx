import React, {useState} from 'react';
import './NavBar.css'
import {MdOutlineTravelExplore} from "react-icons/md";
import {IoCloseOutline} from "react-icons/io5";
import {TbGridDots} from "react-icons/tb";

const NavBar = () => {

    const [active, setActive] = useState(false)
    const showNavTrue = () => {
        setActive(true)
    }

    const showNavFalse = () => {
        setActive(false)
    }

    return (
        <section className={'navBarSection'}>
            <header className={'header flex'}>

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1>
                            <MdOutlineTravelExplore className={'icon'}/> Travel.
                        </h1>
                    </a>
                </div>

                <div className={active ? "navBar activeNavBar" : "navBar"}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-house-fill"></i>
                                Home
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-boxes"></i>
                                Packages
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-bag-fill"></i>
                                Shop
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-tablet-landscape-fill"></i>
                                About
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-clipboard"></i>
                                Pages
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-text-paragraph"></i>
                                News
                            </a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">
                                <i className="me bi bi-telephone-outbound-fill"></i>
                                Contact
                            </a>
                        </li>

                        <button className="btn">
                            <a href="#"><i className="me bi bi-patch-check-fill"></i>  BOOK NOW</a>
                        </button>
                    </ul>

                    <div className="closeNavBar" onClick={()=>showNavFalse()}>
                        <IoCloseOutline className={'icon'}/>
                    </div>

                </div>

                <div onClick={() => showNavTrue()} className="toggleNavBar">
                    <TbGridDots className={'icon'}/>
                </div>
            </header>
        </section>
    );
}

export default NavBar;