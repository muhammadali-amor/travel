import React from 'react';
import './Footer.css'
import video from "../../assets/video/Travel video.mp4";
import {FiChevronRight, FiSend} from "react-icons/fi";
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiOutlineInstagram, AiOutlineTeam, AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {BiLogoTelegram} from "react-icons/bi";
import {BsTelegram} from "react-icons/bs";
import {TbElevator} from "react-icons/tb";

const Footer = () => {
    return (
        <section className="footer">
            <div className="videoDiv">
                <video muted loop autoPlay className={"video"}>
                    <source type={'video/mp4'} src={video}/>
                </video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos={"fade-up"} className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input data-aos={"fade-up"} type="text" placeholder={'Enter Email Address'}/>
                        <button data-aos={"fade-up"} className="btn flex" type={'submit'}>
                            SEND <FiSend className={'icon'}/>
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div data-aos={"fade-up"} className="logoDiv">
                            <a href="#" className={'logo flex'}><MdOutlineTravelExplore className={'icon'}/> Travel.</a>
                        </div>
                        <div data-aos={"fade-up"} className="footerParagraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                            asperiores consequuntur dignissimos doloremque eius facere iusto laboriosam, laborum
                            magnam magni nisi perferendis quasi quod rem repudiandae suscipit unde vitae voluptates!
                        </div>
                        <div data-aos={"fade-up"} className="footerSocials flex">
                            <AiOutlineTwitter className={'icon'}/>
                            <AiOutlineYoutube className={'icon'}/>
                            <AiOutlineInstagram className={'icon'}/>
                            <BiLogoTelegram className={'icon'}/>
                        </div>

                    </div>

                    <div data-aos={"fade-up"} className="footerLinks grid">
                        <div data-aos={"fade-up"} data-aos-duration={'3000'} className="linkGroup">
                                <span className="groupTitle">
                                    BIZNING AGENTLIK
                                </span>
                            <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Services
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Insurance
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Agnetlik
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Turizm
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    To'lov
                                </li>
                            </div>
                            <div data-aos={"fade-up"} data-aos-duration={'4000'} className="linkGroup">
                                <span className="groupTitle">
                                    PARTNERS
                                </span>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Bookings
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Rentcars
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    HostelWorld
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Trivago
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    TripAdvisor
                                </li>
                            </div>
                            <div data-aos={"fade-up"} data-aos-duration={'5000'} className="linkGroup">
                                <span className="groupTitle">
                                    LAST MINUTE
                                </span>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Services
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    California
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Indonesia
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Europa
                                </li>
                                <li className="footerList flex">
                                    <FiChevronRight className={'icon'}/>
                                    Oceania
                                </li>
                            </div>

                        </div>
                        <div data-aos={"fade-up"} className="footerDiv flex">
                            <small>BEST TRAVEL WEBSITE THEME</small>
                            <small>COPYRIGHTS RESERVE</small>
                            <small>COPYRIGHTS RESERVED - ISRATECH 2022</small>

                        </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;