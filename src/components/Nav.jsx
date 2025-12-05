import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars,faXmark, faPhone, faAddressCard, faCode, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const Nav = (props)=>{

    return(
        <>
        <nav>
            <div id="navCtrl" onClick={(e)=>{e.target.classList.toggle("active")}}>
                <FontAwesomeIcon onClick= {(e)=>{e.target.closest("div").classList.toggle("active")}} icon={faBars}/>
                <FontAwesomeIcon onClick= {(e)=>{e.target.closest("div").classList.toggle("active")}} icon={faXmark}/>
            </div>
            <ul>
                <li><a href="#about"><span>About</span> <FontAwesomeIcon icon={faAddressCard}></FontAwesomeIcon></a></li>
                <li><a href="#stack"><span>Stack</span> <FontAwesomeIcon icon={faCode}></FontAwesomeIcon></a></li>
                <li><a href="#contact"><span>Contact</span><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></a></li>
                {props.width && <li><a href="#"><FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon></a></li> }
            </ul>
        </nav>
        </>
    )
}
export {Nav}