import React from "react";
import "./style.css";
import Header from "../../components/Header";
import profilePic from "../../assets/images/franb.jpg";

function AboutSection() {
    return (
        <div className="uk-container">
            <div className="uk-text-center">
                <div id="about-me-container">
                    <div id="about-me">
                        <Header title="About Me" />
                        <p className="uk-text-justify about-me-desc">
                            Hi there and thank you for taking a quick second to getting to know me. My name is Francine and I'm a Full Stack Web Developer, eager and willing to learn new skills, techniques and new everything all the time.
                            I spent the last five years in the airline industry at United Airlines as a CSR, to a Stations Operations Rep, then as a Lead CSR. Our shared purposed was Connecting people, Uniting the World.
                            Now with this experience I want to be able to add on to valueable shared purpose in web developing and that is to help create and build objects and cool things that are both functional and visually engaging.
                            I was 12 years old when I was really nosey on what was behind the internet. I always wondered "What makes this webpage just go?" I was curious, I was always questioning how things work in the tech world.
                            And now having to gain real hands on and grasp the knowlegde about the ingredients of a webpage, my passion for web development has gone sky high from the moment I first created "Hello World!".
                        <br /><br />
                            Currently, I'm finishing up my certificate as a Full-Stack Web Developer at the University of Washington Coding Bootcamp. Starting from August 2020 til now, February 2021 (graduate: end of March 2021) I
                            I have learned to utilize the skills I have under my belt to build impactful user experiences on the web. I do plan and hope to transition into web development as a Full Time career, and I am very much
                            open to any and all opportunities relevant to my skills(i.e, internships, part-time). I am excited and I am ready to merge my shared purpose from experience and my newly developed technical skills with an even
                            better industry that allows, enables, and focuses on creativity and collabortive team work building both useful and amazing objects on the web for the world to experience and enjoy. 
                        </p>
                        <img src={profilePic} alt="franb" style={{ width: 175 }} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutSection;