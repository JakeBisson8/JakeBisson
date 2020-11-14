import React from 'react'

export default function SocialMediaButtons() {
    
    let githubUrl = "https://github.com/JakeBisson8";
    let linkedinUrl = "https://www.linkedin.com/in/jake-bisson/";
    let instagramUrl = "https://www.instagram.com/bissonjake/";
    let facebookUrl = "https://www.facebook.com/jake.bisson.581/";

    return (
        <div>
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="github" className="text-xl inline text-silver bg-primary mr-5 rounded-lg px-2 py-1 hover:shadow-xl cursor-pointer duration-200"><i class="fab fa-github"></i></a>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="linked in" className="text-xl inline text-silver bg-primary mr-5 rounded-lg px-2 py-1 hover:shadow-xl cursor-pointer duration-200"><i class="fab fa-linkedin-in"></i></a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="instagram" className="text-xl inline text-silver bg-primary mr-5 rounded-lg px-2 py-1 hover:shadow-xl cursor-pointer duration-200"><i class="fab fa-instagram"></i></a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="facebook" className="text-xl inline text-silver bg-primary mr-5 rounded-lg px-2 py-1 hover:shadow-xl cursor-pointer duration-200"><i class="fab fa-facebook"></i></a>
        </div>
    )
}
