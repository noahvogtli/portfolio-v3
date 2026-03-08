import React from "react";


function AboutMe() {
    return(
        <>
            <div className="flex flex-col items-center mt-20" id="about">
                <h1 className="text-2xl font-semibold">About Me</h1>
                <p className="mt-4 text-center max-w-2xl text-sm">I am a fourth-year Software Engineering student at the Rochester Institute of Technology, where I focus on full-stack development, clean software architecture, and building products that are easy for people to use. I started programming in high school and quickly became interested in turning ideas into tools with real impact. During my time at RIT, I have strengthened my problem-solving skills through coursework and projects, and I have gained hands-on experience collaborating in team-based environments that mirror real-world development workflows.</p>
                <br></br>
                <p className="mt-4 text-center max-w-2xl text-sm">My experience includes working with a variety of programming languages, including Java and Python. I have also worked with web development technologies such as HTML, CSS, and JavaScript.</p>
            </div>
        </>
    );
}

export default AboutMe;