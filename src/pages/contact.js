import React from 'react';
import Navbar from '../components/navbar';
import Helmet from "react-helmet";

export default function contact(params) {
    return (
        <div>
            <Helmet>
                <title>Contact | Jake Bisson</title>
            </Helmet>
            <Navbar/>
            <div>About Page</div>
        </div>
    );
};
