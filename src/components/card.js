import React from "react"
import { Link } from "gatsby"

export default function Card(params) {
    return (
        <Link to={ params.to } class="card duration-150">
            <img src={ params.image } alt={ params.alt } class="w-full h-32 sm:h-48 object-cover"/>
            <div className="p-5">
                <span class="font-bold text-primary text-lg font-title">{ params.title }</span>
                <span class="block text-secondary text-md font-body">{ params.description }</span>
            </div>
        </Link>
    );
};
