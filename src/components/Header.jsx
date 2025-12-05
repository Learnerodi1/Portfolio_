import React,{Component} from "react";
import { ElementBody } from "./Body";
import mainlogo from "./../images/mainlogo.png"

const Header =(props) =>{
    return(
        <header>
            <ElementBody name = "Home" >
                <article>
                    <div className="headerContainer">
                        <figure>
                            <img src={mainlogo} alt="logo" />
                        </figure>
                        <h3>Learner </h3>
                    </div>
                    {/* <p>He is a frontEnd Developer.#PresentDay..Tech</p> */}
                </article>
            </ElementBody>
        </header>
    )
}
export {Header}