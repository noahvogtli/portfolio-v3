import React from "react";
import { FaGithub, FaLinkedin  } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'  

type SocialsProps = {
    onEmailClick?: () => void
}

function Socials({ onEmailClick }: SocialsProps) {
    return(
        <>
        <div className="flex flex-row mt-8 gap-6">
            <a href="https://www.linkedin.com/in/noahvogtli/" target="_blank">
                <FaLinkedin size={22} className="hover:fill-red-800 hover:scale-110"/>
            </a>
            <a href="https://github.com/noahvogtli" target="_blank">
                <FaGithub size={22} className="hover:fill-red-800 hover:scale-110"/>
            </a>
            <button type="button" onClick={onEmailClick} aria-label="Open contact form" className="hover:cursor-pointer">
                <FiMail size={22} className="hover:stroke-red-800 hover:scale-110"/>
            </button>
            </div>
        </>
    );
}

export default Socials;