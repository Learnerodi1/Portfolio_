import React,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"

const Socials = () =>{
    return(
         <div className="socials">
            <a href="https://www.instagram.com/cchukwudi099/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/profile.php?id=100084754180014"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/Chinons43591657"><FontAwesomeIcon icon={faTwitter} /></a>
         </div>
    )
}
export {Socials}