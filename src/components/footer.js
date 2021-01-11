import React from "react"
import CoopBanner from "./coopbanner";
import SocialMediaButtons from "./socialMediaButtons";

export default function Footer() {
    return (
        <footer>
            <CoopBanner/>
            <div className="className=bg-silver px-16 md:px-24 lg:px-48 xl:px-64 py-6 text-primary">
                <div class="flex flex-col sm:flex-row justify-between items-center flex-wrap">
                    <div>
                        <a href="https://drive.google.com/file/d/1sTZUdsdrZuk-FGD794YvGeAi-Jame3Ys/view?usp=sharing" target="_blank" className="rounded-xl text-silver bg-primary font-body p-3 hover:shadow-lg duration-200">Resume</a>
                    </div>
                    <div className="text-center m-5 sm:m-0">
                        <div className="text-3xl font-bold font-title">Jake Bisson</div>
                        <div className="text-secondary font-body">jlb4@rogers.com</div>
                    </div>
                    <SocialMediaButtons />
                </div>
            </div>
        </footer>
    );
};
