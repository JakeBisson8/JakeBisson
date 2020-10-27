import React from "react"
import Navbar from "../components/navbar"
import Helmet from "react-helmet";

//tailwind
import "../styles/tailwind.css"

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Jake Bisson</title>
      </Helmet>
      <Navbar />
      <h1 className="text-xl">Home page</h1>
    </div>
  );
}
