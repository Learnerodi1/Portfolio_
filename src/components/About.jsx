import React,{Component} from "react";
import { ElementBody } from "./Body";
import firstImg from "./../images/pic1.png"
import SecondImg from "./../images/pic2.png"

const About = (props) =>{
    return (
        <section id ="about">
            <ElementBody name ="About" widthX = {props.widthX}>
                <div className="aboutContainer">
                    <figure>
                        <img src={firstImg} alt="" />
                        <img id="middle" src={SecondImg} alt="" />
                        <div></div>
                        <p>Projects</p>
                    </figure>
                    <a target ={"_blank"} href="https://projectpreviw.netlify.app/">Preview</a>
                    <article>
                        <span>Name : {props.name}. Date of Birth : {props.DOB}. Age : {props.age}. Skills : {props.skill}</span>
                        <code>THis user can Learn ANYTHIING</code>
                    </article>
                </div>
            </ElementBody>
        </section>
    )
}

export {About}
