import React from "react"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

//tailwind
import "../styles/tailwind.css"

export default function About() {
    return (
        <div>
            <Helmet>
                <title>About | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div>About Page</div>
        </div>
    );
};  
