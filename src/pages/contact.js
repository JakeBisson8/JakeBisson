import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Helmet from "react-helmet";
import SocialMediaButtons from "../components/socialMediaButtons";

//tailwind
import "../styles/tailwind.css"
import "../styles/main.css";

import contactMe from "../images/contactme.svg"
export default function contact() {
    let githubUrl = "https://github.com/JakeBisson8";
    let linkedinUrl = "https://www.linkedin.com/in/jake-bisson/";
    let instagramUrl = "https://www.instagram.com/bissonjake/";
    let facebookUrl = "https://www.facebook.com/jake.bisson.581/";

    return (
        <div>
            <Helmet>
                <title>Let's Connect | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div className="w-3/4 m-auto mb-12">
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 col-gap-32 md:mt-32">
                    <div className="col-span-2">
                        <h1 className="text-5xl lg:text-6xl text-primary font-title font-bold">Let's Connect</h1>
                        <p className="text-md md:text-xl font-body text-secondary">
                            I would love to connect with you. The best way to reach me is through my email. 
                            You can also contact me through LinkedIn or my social media accounts. 
                            I look forward to hearing from you!
                        </p> 
                        <div className="text-primary text-xl mt-8">jlb4@rogers.com</div>
                        <div className="mt-8"><SocialMediaButtons/></div>
                    </div>
                    <div className="hidden md:block col-span-1">
                        <img src={ contactMe } alt="Projects" className="h-64"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
