import React from 'react';
import Navbar from '../components/navbar';
import Helmet from "react-helmet";

export default function contact(params) {
    return (
        <div>
            <Helmet>
                <title>Socials | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div>Socials page</div>
        </div>
    );
};
