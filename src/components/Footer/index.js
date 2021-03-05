/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

class Footer extends React.Component {
    render() {
        return (
            <footer className="uk-text-center uk-text-middle footer">
                <span>  © Francine Babauta</span> <br />
                <a uk-icon="icon: github" href="https://github.com/fbabauta" className="contact-icon contact-link-icon" target="_blank"></a>
                <a uk-icon="icon: mail" className="contact-icon contact-link-icon" href="mailto:francine.babauta@outlook.com"></a>
                <a uk-icon="icon: linkedin" href="https://www.linkedin.com/in/francine-babauta/" target="_blank" className="contact-icon contact-link-icon"></a>
            </footer>
        )
    }
};

export default Footer;