import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
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
            <div className="mb-12 px-16 md:px-40 lg:px-48 xl:px-64">
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 col-gap-24 md:mt-32">
                    <div className="col-span-2">
                        <div className="mb-8">
                            <h1 className="text-6xl text-primary font-title font-bold">About Me</h1>
                            <p className="text-2xl text-secondary font-title font-bold">Fun Fact: I think PHP is a great language</p>
                        </div>
                        <div className="text-secondary font-body text-xl">
                            <p className="mb-6">
                                I'm a third year software engineering student studying at the University of Ottawa. 
                                I started programming in Java when I was fifteen. Since then, I've developed a passion for 
                                full stack web development. I love getting creative on the front-end and managing data in the back-end.
                                I'm always trying to expand my knowledge by learning new technologies and frameworks so I can fit in anywhere on the stack.
                                When I am not designing websites and APIs, you can find me at the hockey arenas reffing AAA hockey or 
                                at home playing some video games with my friends. 
                            </p>
                            <p>
                                That's enough about me for now, I'd like to get to know about you! you can reach out to me through 
                                my <Link to="/contact" className="text-primary">socials</Link> or by email (jlb4@rogers.com). 
                            </p>
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
