import React from "react";
import { Link } from "react-router-dom";
import Socials from "./socials";
import TechStack from "./techstack";
import { FaFolder, FaUser, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import portrait from "../assets/portrait.png";

function Hero() {
    return (
        <>
        <div className="mt-32 md:mt-48 flex flex-col items-start">
            <div className="flex flex-row items-center ">
                <div className="w-28 h-28 md:w-46 md:h-46 rounded-full overflow-hidden shrink-0">
                    <img src={portrait} alt="Portrait of Noah" className="w-full h-full object-cover object-[50%_-10%] scale-155"/>
                </div>
                <div className="flex flex-col ml-[5%] text-left">
                    <h1 className="text-2xl md:text-5xl font-bold text-white whitespace-nowrap">Noah Vogtli</h1>
                    <p className="text-left mt-[4%] text-neutral-500 italic md:whitespace-nowrap">Software Engineering Student at RIT</p>
                    <Socials />
                </div>
            </div>
            <p className="md:text-lg mt-10 md:mt-8 text-neutral-500 text-left w-[100%]]">I'm a fourth-year Software Engineering student at Rochester Institute of Technology and current intern at Kodak. I'm passionate about building clean, reliable web applications using frameworks like React.</p>
            <div className="flex flex-row mt-8 mb-8 md:gap-6 gap-4">
                <Link to="/about" className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-500"><FaUser />About</Link>
                <a href="#projects" className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaFolder />Projects</a>
                <a href="/NoahVogtliResume.pdf" target="_blank" className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaFileAlt />Resume<FaExternalLinkAlt size={12} className="hidden md:block"/></a>                
            </div>
            <TechStack />
        </div>
        </>
    )
}

export default Hero;