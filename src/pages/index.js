import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Helmet from "react-helmet"

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
import cardImage from "../images/stew.jpg";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Jake Bisson</title>
      </Helmet>
      <Navbar />
      <div className="bg-primary p-16 md:p-24 lg:p-32 flex justify-center items-center flex-col">
        <div>
          <h1 className="text-silver text-6xl font-bold">Hello, I'm Jake</h1>
          <p className="text-silver text-xl">I am a third year software engineering student at the University of Ottawa.</p> 
        </div>
      </div>
      <div className="bg-silver flex flex-wrap justify-center items-center p-6 duration-300">
        <img src={ htmlLogo } alt="html Logo" className="h-16 mx-16"/>
        <img src={ cssLogo } alt="css Logo" className="h-16 mx-16"/>
        <img src={ jsLogo } alt="js Logo" className="h-16 mx-16"/>
        <img src={ phpLogo } alt="php Logo" className="h-16 mx-16"/>
        <img src={ nodeLogo } alt="Node Logo" className="h-16 mx-16"/>
        <img src={ reactLogo } alt="React Logo" className="h-16 mx-16"/>
        <img src={ oracleDBLogo } alt="oracle DB Logo" className="h-16"/>
      </div>
      
      <Footer />
    </div>
  );
}
