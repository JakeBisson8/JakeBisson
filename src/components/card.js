import React from "react"

export default function Card(params) {
    if (params.isLive === "true") {
        return (
            <div className="card duration-150">
                <img src={ params.image } alt={ params.alt } className="w-full h-32 sm:h-48 object-cover"/>
                <div className="p-5">
                    <span className="font-bold text-primary text-lg font-title">{ params.title }</span>
                    <span className="block text-secondary text-md font-body">{ params.description }</span>
                    <a href={params.liveUrl} rel="noreferrer" target="_blank" className="block text-center border p-2 text-silver bg-primary rounded-lg mt-3 hover:shadow-lg duration-200 md:inline-block md:mr-3">Live Version</a>
                    <a href={params.repoUrl} rel="noreferrer" target="_blank" className="block text-center border p-2 border-primary rounded-md text-primary mt-3 hover:bg-primary hover:text-silver hover:shadow-lg duration-200 md:inline-block">Repository</a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card duration-150">
                <img src={ params.image } alt={ params.alt } className="w-full h-32 sm:h-48 object-cover"/>
                <div className="p-5">
                    <span className="font-bold text-primary text-lg font-title">{ params.title }</span>
                    <span className="block text-secondary text-md font-body">{ params.description }</span>
                    <a href={params.repoUrl} rel="noreferrer" target="_blank" className="block text-center border p-2 border-primary rounded-md text-primary mt-3 hover:bg-primary hover:text-silver hover:shadow-lg duration-200 md:inline-block">Repository</a>
                </div>
            </div>
        );
    }
};
