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
import webDeveloper from "../images/webdeveloper.svg";
//import onlineBikeShop from "../images/lab5img1.png";
//import uiDesignProject from "../images/uidesignproject.png";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Jake Bisson</title>
        <script src="https://kit.fontawesome.com/b3bbc226c9.js" crossOrigin="anonymous"></script>
      </Helmet>
      <Navbar />
      <div className="bg-white p-16 md:p-40 lg:p-48 xl:p-64 flex items-center">
        <div className="grid grid-cols-7">
          <div className="col-span-7 lg:col-span-5">
            <h1 className="text-primary text-6xl font-bold font-title">Hello, I'm Jake</h1>
            <p className="text-secondary text-xl font-body">I am a third year software engineering student at the University of Ottawa.</p> 
            <div className="mt-10 text-center sm:text-left font-body">
              <Link to="/" className="text-lg px-6 py-4 text-silver border border-primary bg-primary rounded-xl mr-5 hover:shadow-xl duration-200">Projects</Link>
              <Link to="/" className="text-lg px-6 py-4 border border-primary text-primary rounded-xl hover:shadow-xl hover:bg-primary hover:text-silver duration-200">Socials</Link>
            </div>
          </div>
          <div className="hidden md:col-span-2 lg:block">
            <img src={ webDeveloper } alt="web developer" className="h-64" />
          </div>
        </div>
      </div>

      <div className="bg-silver flex flex-col md:flex-row flex-wrap justify-center items-center p-6 duration-300">
        <img src={ htmlLogo } alt="html Logo" className="h-16 mx-16"/>
        <img src={ cssLogo } alt="css Logo" className="h-16 mx-16"/>
        <img src={ jsLogo } alt="js Logo" className="h-16 mx-16"/>
        <img src={ phpLogo } alt="php Logo" className="h-16 mx-16"/>
        <img src={ nodeLogo } alt="Node Logo" className="h-16 mx-16"/>
        <img src={ reactLogo } alt="React Logo" className="h-16 mx-16"/>
        <img src={ oracleDBLogo } alt="oracle DB Logo" className="h-16"/>
      </div>
      
      <div className="px-20 py-10 md:px-48 lg:px-64">
        <h2 className="text-primary text-5xl font-bold font-title">My Projects</h2>
        <div>
          <div className="mt-8 grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-10">
            <Card to="" image={ webDeveloper } alt="HyperText" title="HyperText" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
            <Card to="" image={ webDeveloper } alt="UI Design Project" title="UI Design Project" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
            <Card to="" image={ webDeveloper } alt="Online Bike Shop" title="Online Bike Shop" description="Irure laboris velit excepteur tempor non est elit sunt mollit deserunt nostrud ipsum labore labore. Qui in cillum nostrud officia officia. Sit adipisicing qui ut mollit exercitation proident officia. " /> 
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
