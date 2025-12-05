import React,{Component} from "react";
import { ElementBody } from "./Body";
import { ContactList } from "./conatctlist";

const Contact = (props)=>{
    return(
        <section id="contact">
            <ElementBody name ="Contact">
                <div className="contactContainer">
                <h5>Contact</h5>
                    <article>
                        <h3>official de Learner</h3>
                        <p>When you look above the stars you wll see God. God created the heavens and the earth and in the heavens he liveth. Do not underestimate the power of the mind. The mind is a very peowrful tool. That is why God gave us , humans, a unique mind to think , to create , to <b>LEARN</b>. Be careful what you feed the mind. Because anything you feed the mind can make you or it can maim you. Adios!!!! , Au revoir!!!😏</p>
                        <ContactList title="Address" content="No way Home"></ContactList>
                        <ContactList title="Phone" content="+234 666 4190 345"></ContactList>
                        <ContactList title="Email" content="cchukwudi099@gmail.com"></ContactList>
                    </article>
                    <form action="https://formsubmit.co/cchukwudi099@gmail.com" method="POST">
                        <h4>Contact Delearner</h4>
                        <div>
                            <p><input type="text"placeholder="Your Name" /></p>
                            <p><input type="text"placeholder="Your Email" /></p>
                            <p><input type="tel"placeholder="Your Phone Number" /></p>
                            <p><input type="tel"placeholder="Message" /></p>
                        </div>
                        <button className="btn">Send</button>
                    </form>
                </div>
            </ElementBody>
        </section>
    )
}
export {Contact}