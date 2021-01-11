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
import prophecy from "../images/prophecy.jpg";
import onlineBikeShop from "../images/onlinebikeshop.png";
import designProject from "../images/designandanalysis.png";

export default function Projects() {
    return (
        <div>
            <Helmet>
                <title>Projects | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div className="mb-12 md:mb-24 px-16 md:px-40 lg:px-48 xl:px-64">
                <div className="flex justify-center md:justify-between items-start mt-12 md:mt-24">
                    <div className="mb-8">
                        <h1 className="text-6xl text-primary font-title font-bold">Projects</h1>
                    </div>
                    <div className="hidden md:block">
                        <img src={ projects } alt="Projects" className="h-48"/>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-10 mt-16 mb-16">  
                    <Card image={ designProject } isLive="true" liveUrl="https://jakebisson8.github.io/UIDesign/" repoUrl="https://github.com/JakeBisson8/UIDesign" alt="UI Design Project" title="UI Design Project" description="A website to showcase the labs and activities performed during the University of Ottawa UI Analysis and Design course." /> 
                    <Card image={ onlineBikeShop } isLive="true" liveUrl="https://jakebisson8.github.io/UIDesign/projects/bike-repair-shop/index.html" repoUrl="https://github.com/JakeBisson8/UIDesign/tree/main/docs/projects/bike-repair-shop" alt="Online Bike Shop" title="Online Bike Shop" description="A website to represent a bike repair shop to allow users to book service appointments based on the availability of workers."/> 
                    <Card image={ prophecy } isLive="false" liveUrl="" repoUrl="https://github.com/JakeBisson8/Prophecy" alt="Prophecy" title="Prophecy" description="A PHP framework to make it easier for developers to connect and query Oracle Databases using PHP." />
                </div>
            </div>
            <Footer />
        </div>
    );
};  
