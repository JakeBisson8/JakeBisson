import React from "react"
import { Link } from "gatsby"

export default function Navbar() {

    function openNavMenu() {
        let menu = document.getElementById("nav-items");
        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
        } else {
            menu.classList.add("hidden");
        }
    }

    return (
        <nav className="flex flex-wrap justify-between items-center bg-silver py-6 px-6 md:px-24 lg:px-40">
            <div className="flex items-center flex-shrink-0 text-silver mr-6 cursor-pointer">
                <Link to="/" className="hidden text-primary text-4xl font-bold lg:block">Jake Bisson</Link>
                <Link to="/" className="hidden text-primary text-4xl font-bold md:block lg:hidden">Jake</Link>
                <Link to="/" className="text-primary text-4xl font-bold md:hidden">JB</Link>
            </div>
            <div className="md:hidden">
                <Link to="/" className="inline-block py-2 px-3 border rounded-xl border-primary text-primary hover:bg-primary hover:text-silver duration-200 hover:shadow-lg">Resume</Link>
            </div>
            <div className="md:hidden">
                <button className="flex items-center px-3 py-2 rounded text-primary hover:bg-primary focus:outline-none" onClick={ openNavMenu }>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="hidden block w-full md:flex md:justify-center md:items-center md:w-auto md:background-secondary" id="nav-items">
                <Link to="/" className="block p-2 text-primary rounded md:inline-block lg:mt-0 hover:text-secondary duration-200 mr-4">Home</Link>
                <Link to="/about" className="block p-2 text-primary rounded md:inline-block lg:mt-0 hover:text-secondary duration-200 mr-4">About</Link>
                <Link to="/projects" className="block p-2 text-primary rounded md:inline-block lg:mt-0 hover:text-secondary duration-200 mr-4">Projects</Link>
                <Link to="/contact" className="block p-2 text-primary rounded md:inline-block lg:mt-0 hover:text-secondary duration-200 mr-4">Contact</Link>
                <Link to="/" className="hidden md:inline-block py-2 px-3 border rounded-xl border-primary text-primary hover:bg-primary hover:text-silver duration-200 hover:shadow-lg">Resume</Link>
            </div>
        </nav>
    );
}
