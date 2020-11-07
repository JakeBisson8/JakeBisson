import React from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Helmet from "react-helmet";

//tailwind
import "../styles/tailwind.css"
import "../styles/main.css";

//images
import aboutMe from "../images/aboutme.svg";

export default function About() {
    return (
        <div>
            <Helmet>
                <title>About | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div className="w-3/4 m-auto">
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 col-gap-32 md:mt-32">
                    <div className="col-span-2">
                        <div className="mb-8">
                            <h1 className="text-6xl text-primary font-title font-bold">About Me</h1>
                            <p className="text-2xl text-secondary font-title font-bold">Fun Fact: I think PHP is amazing</p>
                        </div>
                        <div className="text-secondary font-body text-xl">
                            <p className="mb-6">
                                I'm a third year software engineering student at the University of Ottawa. 
                                I started programming in Java when I was 15. Since then, I've developed a passion for 
                                web development.
                            </p>
                            <p className="mb-6">
                                I love being able to get creative on the front-end and applying logic in the back-end. During my free time, I learn about new technologies to expand my knowledge so I can
                                become the best developer I can possibly be.
                            </p>
                            <p>
                                That's enough about me for now, I'd like to get to know about you! you can reach out to me through my socials 
                                or by email (jlb4@rogers.com). 
                            </p>
                        </div>
                        <div className="mt-12 mb-12">
                            <p className="text-primary text-4xl font-title font-bold">I'm searching for a co-op placement...</p>
                            <p className="text-secondary text-xl font-title font-bold">
                            (Summer 2021, May-August) Full stack, Front-end, or Back-end Developer 
                            </p>
                            <p className="text-secondary font-body text-lg mt-3">
                                I would love to get an opportunity to become the newest asset to your team. 
                            </p>
                            <button className="text-primary border border-primary rounded-md px-3 py-2 mt-3 hover:bg-primary hover:text-silver hover:shadow-lg duration-200">View Resume</button>
                        </div>
                    </div>
                    <div className="col-span-1 hidden md:block">
                        <img src={ aboutMe } alt="About Me" className="h-64"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};  
