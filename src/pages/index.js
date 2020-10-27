import React from "react"
import Navbar from "../components/navbar"

//tailwind
import "../styles/tailwind.css"

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-xl">Home page</h1>
    </div>
  );
}
