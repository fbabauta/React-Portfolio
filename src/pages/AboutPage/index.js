import React from "react";
import "./style.css";
import Navbar from "../../components/Navbar";
import HomeHeader from "../../components/HomeHeader";
import AboutSection from "../../components/AboutSection";
import BackgroundImage from "../../components/BackgroundImage";
import imageURL from "../../assets/images/background/pink-hibiscus-flowers-green-pastel-background.png";

function AboutPage() {
    return (
        <BackgroundImage image={imageURL}>
            <Navbar />
            <HomeHeader />
            <AboutSection />
        </BackgroundImage>
    )
};

export default AboutPage;