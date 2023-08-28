import React from "react";
import "../AboutMe/Aboutme.css";

const Aboutme = () => {
    return (
        <>
        <div className="container aboutme" id="aboutme">
            <div className="row">
                <div className="col mx-auto">
                    <h2>About Me</h2>
                    </div> 
            </div>
            <div className="row">
            <div className="col-lg-8 mx-auto">
                <p>
                    Hi, I'm Samar Sekhar Sahoo. A Full Stack Web Developer.
                    I am specialized in developing responsive websites and web applications.
                    Good at both Frontend and Backend technologies like HTML,CSS,JavaScript,React,Redux,Node,Express,Bootstrap,Git etc.
                </p>
                <p>
                    I'm currently working on MERN stack projects and learning TypeScript and Python.
                    I'm looking to collabrate on MERN stack projects.
                </p>
            </div>
        </div>
        </div>
        </>
    )
}
export default Aboutme;