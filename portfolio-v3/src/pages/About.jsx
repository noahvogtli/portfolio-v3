import React from "react";
import Socials from "../components/socials";
import portrait from "../assets/portrait.png";

function About() {
    return (
        <div className="flex flex-col mt-32 md:mt-48 items-start" id="about">

            {/* Header */}
            <div className="flex flex-row items-start md:items-center">
                <div className="w-28 h-28 md:w-46 md:h-46 rounded-full overflow-hidden shrink-0">
                    <img src={portrait} alt="Portrait of Noah" className="w-full h-full object-cover object-[50%_-10%] scale-155"/>
                </div>
                <div className="flex flex-col ml-[5%] text-left">
                    <h1 className="text-2xl md:text-5xl font-bold text-white whitespace-nowrap md:mt-4">About Me</h1>
                    <p className="text-left mt-[3%] text-neutral-500 italic md:whitespace-nowrap">Get to know me better through my experiences, projects, and hobbies</p>
                    <div className="invisible"><Socials /></div>
                </div>
            </div>
            <div className="mt-12 flex flex-col gap-12">

                {/* Background */}
                <section>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Background</p>
                    <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-8 flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed">
                        I am a fourth-year Software Engineering student at the Rochester Institute of Technology, where I focus on full-stack development, clean software architecture, and applying software engineering principles to real-world problems.

                        <br></br><br></br>
                        I started programming in high school and quickly became interested in turning ideas into tools with real impact. During my time at RIT, I have strengthened my problem-solving skills through coursework and projects, and I have gained hands-on experience collaborating in team-based environments that mirror real-world development workflows.

                        <br></br><br></br>
                        My experience includes working with a variety of programming languages, including Java and Python. I have also worked with web development technologies such as React, TailwindCSS, and JavaScript.
                    </div>
                </section>

                {/* Experience */}
                <section>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Experience</p>
                    <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-8 flex flex-col gap-2">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                            <div>
                                <h2 className="text-white font-semibold">Digital Marketing &amp; Marketing Analysis Intern</h2>
                                <p className="text-neutral-500 text-sm">Eastman Kodak Company</p>
                            </div>
                            <span className="text-neutral-600 text-sm shrink-0">Co-op</span>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed mt-6">Throughout school, I was able to gain valuable experience through two co-ops. As a Digital Marketing / Marketing Analysis Intern at Eastman Kodak Company, I developed B2B and B2C email campaigns using HTML and CSS while helping manage and organize email lists through Microsoft Excel, Salesforce, Marketing Cloud, and Pardot.
                        <br></br><br></br>
                        In this role, I collaborated with a team of four to build email content within specific word count and timeline requirements, and I also created an HTML template in Pardot that allowed colleagues without coding experience to produce campaigns more efficiently.
                        <br></br><br></br>
                        Additionally, I was given the task to automate lead generations through forms. Before, every submission from lead generation forms had to be processed individually, consuming significant time. This also was prone to user error due to information being put in manually. I was able to generate and modify code that allowed data to be processed directly from the user form, to be created into a lead in Salesforce.</p>
                    </div>
                </section>

                {/* Outside of Work */}
                <section>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">Outside of Code</p>
                    <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-8 text-neutral-300 text-sm leading-relaxed">
                        <p>Outside of software engineering, I enjoy playing and watching sports — especially basketball. I also love traveling, exploring new places, and trying out new restaurants and cuisines.</p>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default About;
