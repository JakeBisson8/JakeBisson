import React from "react"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

//tailwind
import "../styles/tailwind.css"

export default function Projects() {
    return (
        <div>
            <Helmet>
                <title>Projects | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div>Projects Page</div>
        </div>
    );
};  
