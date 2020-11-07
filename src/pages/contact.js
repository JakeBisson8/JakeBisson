import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Helmet from "react-helmet";

//tailwind
import "../styles/tailwind.css"
import "../styles/main.css";

import contactMe from "../images/contactme.svg"
export default function contact() {
    return (
        <div>
            <Helmet>
                <title>Let's Connect | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            
            <div className="flex justify-center md:justify-between mx-auto items-center mt-16 md:w-3/4">
                <div className="mb-8">
                    <h1 className="text-6xl text-primary font-title font-bold">Let's Connect</h1>
                </div>
                <div className="hidden md:block">
                    <img src={ contactMe } alt="Projects" className="h-64"/>
                </div>
            </div>

            <div>
                <p>I would love to connect with you. Please contact me on my social media or by email. All links can be found below.</p> 
            </div>

            <div>
                <ul>
                    <li>Email: </li>
                    <li>Linked In: </li>
                    <li>Instagram: </li>
                    <li>Facebook: </li>
                    <li>Github: </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
};
