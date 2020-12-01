import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Card from "../components/card"
import Helmet from "react-helmet"

//tailwind
import "../styles/tailwind.css"
import "../styles/main.css";

//images
import projects from "../images/projects.svg";
import webDeveloper from "../images/webdeveloper.svg";
import onlineBikeShop from "../images/onlinebikeshop.png";
import designProject from "../images/designandanalysis.png";

export default function Projects() {
    return (
        <div>
            <Helmet>
                <title>Projects | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div className="px-16 md:px-40 lg:px-48 xl:px-64">
                <div className="flex justify-center md:justify-between items-center mt-16">
                    <div className="mb-8">
                        <h1 className="text-6xl text-primary font-title font-bold">Projects</h1>
                    </div>
                    <div className="hidden md:block">
                        <img src={ projects } alt="Projects" className="h-48"/>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-10 mt-16 mb-16">
                    <Card image={ webDeveloper } liveUrl="https://www.google.ca" repoUrl="https://www.google.ca" alt="HyperText" title="HyperText" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
                    <Card image={ designProject } liveUrl="https://jakebisson8.github.io/UIDesign/" repoUrl="https://github.com/JakeBisson8/UIDesign" alt="UI Design Project" title="UI Design Project" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
                    <Card image={ onlineBikeShop } liveUrl="https://jakebisson8.github.io/UIDesign/projects/bike-repair-shop/index.html" repoUrl="https://github.com/JakeBisson8/UIDesign/tree/main/docs/projects/bike-repair-shop" alt="Online Bike Shop" title="Online Bike Shop" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
                </div>
            </div>
            <Footer />
        </div>
    );
};  
