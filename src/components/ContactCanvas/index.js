import React from "react";
import "./style.css";

function ContactCanvas() {
    return (
        <div id="contact-canvas" uk-offcanvas="overlay: true" >
            <div className="uk-offcanvas-bar">
                <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                <h3 id="contact-title">Contact Me</h3>
                <ul className="uk-list">
                    <li>
                        <a uk-icon="icon: mail" className="contact-icon contact-link-icon"
                            href="mailto:francine.babauta@outlook.com"></a>
                        <a className="contact-link contact-li uk-text-middle"
                            href="mailto:francine.babauta@outlook.com">francine.babauta@outlook.com</a>
                    </li>
                    <li>
                        <span className="contact-icon" uk-icon="icon: receiver"></span>
                        <span className="contact-li uk-text-middle">(253) 777-2654</span>
                    </li>
                    <li>
                        <span uk-icon="icon: home" className="contact-icon"></span>
                        <span className="contact-li uk-text-bottom">USA</span>
                    </li>
                    <li>
                        <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/francine-babauta/"
                            className="contact-icon contact-link-icon" target="_blank"></a>
                        <a className="contact-link contact-li uk-text-bottom" href="https://www.linkedin.com/in/francine-babauta/"
                            target="_blank">Francine Babauta</a>
                    </li>
                </ul>
            </div>
        </div >
    )
};

export default ContactCanvas;