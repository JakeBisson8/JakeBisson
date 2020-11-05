import React from "react"

export default function Footer() {

    let githubUrl = "https://github.com/JakeBisson8";
    let linkedinUrl = "https://www.linkedin.com/in/jake-bisson/";
    let instagramUrl = "https://www.instagram.com/bissonjake/";
    let facebookUrl = "https://www.facebook.com/jake.bisson.581/";

    return (
        <footer className="bg-silver px-16 md:px-24 lg:px-48 xl:px-64 py-6 text-primary">
            <div class="flex flex-col sm:flex-row justify-between items-center flex-wrap">
                <div>
                    <button className="border border-primary rounded-xl text-primary font-body p-3 hover:bg-primary hover:text-silver hover:shadow-lg duration-200">Resume</button>
                </div>
                <div className="text-center m-5 sm:m-0">
                    <div className="text-3xl font-bold font-title">Jake Bisson</div>
                    <div className="text-secondary font-body">jlb4@rogers.com</div>
                </div>
                <div>
                    <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="github" className="text-xl inline border border-primary mr-5 rounded-lg px-2 py-1 hover:text-silver hover:bg-primary cursor-pointer duration-200"><i class="fab fa-github"></i></a>
                    <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="linked in" className="text-xl inline border border-primary mr-5 rounded-lg px-2 py-1 hover:text-silver hover:bg-primary cursor-pointer duration-200"><i class="fab fa-linkedin-in"></i></a>
                    <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="instagram" className="text-xl inline border border-primary mr-5 rounded-lg px-2 py-1 hover:text-silver hover:bg-primary cursor-pointer duration-200"><i class="fab fa-instagram"></i></a>
                    <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="facebook" className="text-xl inline border border-primary mr-5 rounded-lg px-2 py-1 hover:text-silver hover:bg-primary cursor-pointer duration-200"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </footer>
    );
};
