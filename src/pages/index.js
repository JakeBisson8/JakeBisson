import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Card from "../components/card"
import Helmet from "react-helmet"
import { Link } from "gatsby"

//tailwind
import "../styles/tailwind.css"
import "../styles/main.css";

import nodeLogo from "../images/nodeJSLogo.svg";
import reactLogo from "../images/reactLogo.svg";
import phpLogo from "../images/phpLogo.svg";
import htmlLogo from "../images/htmlLogo.svg";
import cssLogo from "../images/cssLogo.svg";
import jsLogo from "../images/javscriptLogo.svg";
import oracleDBLogo from "../images/oracleDBLogo.svg";
import prophecy from "../images/prophecy.jpg";
import webDeveloper from "../images/webdeveloper.svg"
import onlineBikeShop from "../images/onlinebikeshop.png";
import designProject from "../images/designandanalysis.png";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Jake Bisson</title>
        <script src="https://kit.fontawesome.com/b3bbc226c9.js" crossOrigin="anonymous"></script>
      </Helmet>
      <Navbar />
      <div className="bg-white p-16 md:py-20 md:px-40 lg:py-24 lg:px-48 xl:py-32 xl:px-64 flex items-center">
        <div className="grid grid-cols-7 col-gap-12">
          <div className="col-span-7 lg:col-span-5">
            <h1 className="text-primary text-6xl font-bold font-title">Hello, I'm Jake</h1>
            <p className="text-secondary text-xl font-body">I am a third year software engineering student at the University of Ottawa. I would love to be a new asset to your team for the summer 2021 term.</p> 
            <div className="mt-10 text-center sm:text-left font-body">
              <Link to="/about" className="text-lg w-full px-6 py-4 block sm:inline-block sm:w-auto text-silver border border-primary bg-primary rounded-xl mr-5 hover:shadow-xl duration-200">More about me</Link>
              <Link to="/contact" className="text-lg w-full mt-4 px-6 py-4 block sm:mt-0 sm:inline-block sm:w-auto border border-primary text-primary rounded-xl hover:shadow-xl hover:bg-primary hover:text-silver duration-200">Connect with me</Link>
            </div>
          </div>
          <div className="hidden md:col-span-2 lg:block">
            <img src={ webDeveloper } alt="web developer" className="h-64" />
          </div>
        </div>
      </div>
      
      <div className="p-16 md:px-40 lg:px-48 xl:px-64">
        <h2 className="text-primary text-5xl font-bold font-title">My Projects</h2>
        <div className="my-20">
          <div className="mt-8 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-10">
            <Card image={ designProject } isLive="true" liveUrl="https://jakebisson8.github.io/UIDesign/" repoUrl="https://github.com/JakeBisson8/UIDesign" alt="UI Design Project" title="UI Design Project" description="A website to showcase the labs and activities performed during the University of Ottawa UI Analysis and Design course." /> 
            <Card image={ onlineBikeShop } isLive="true" liveUrl="https://jakebisson8.github.io/UIDesign/projects/bike-repair-shop/index.html" repoUrl="https://github.com/JakeBisson8/UIDesign/tree/main/docs/projects/bike-repair-shop" alt="Online Bike Shop" title="Online Bike Shop" description="A website to represent a bike repair shop to allow users to book service appointments based on the availability of workers."/> 
            <Card image={ prophecy } isLive="false" liveUrl="" repoUrl="https://github.com/JakeBisson8/Prophecy" alt="Prophecy" title="Prophecy" description="A PHP framework to make it easier for developers to connect and query Oracle Databases using PHP." />
          </div>
          <Link to="/projects" className="block text-center mt-10 text-secondary-lighter text-xl hover:underline duration-200">More projects<i className="fas fa-arrow-right ml-1"></i></Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
