import React from "react";
import versevision from "../assets/versevision.png";
import javascriptwrestlers from "../assets/javascriptwrestlers.png";
import digitalmedia from "../assets/21digitalmedia.png";
import {FaGithub, FaLink} from "react-icons/fa";
import lavishlandscapes from "../assets/lavishlandscapes.png";

function Projects(){
    return (
        <>
        <h2 className="text-white text-3xl uppercase tracking-widest mb-3 mt-20 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed flex-2 h-[100%] hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
                <img src={versevision} alt="VerseVision screenshot" className="w-full h-[50%] object-cover rounded-md"/>
                <h1 className="text-lg">VerseVision</h1>
                <p className="text-xs text-zinc-500">React | Anthropic | Render | Node.js | Express | Supabase</p>
                <p>VerseVision is an AI-powered tool designed to help you dive deeper into scripture by breaking down verses with historical context, theological insights, and real-world applications.</p>
                <div className="flex flex-row gap-4 mt-auto">
                    <a href="https://github.com/noahvogtli/VerseVision" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaGithub></FaGithub>Github</a>
                    <a href="https://www.versevision.net" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaLink></FaLink>Visit</a>
                </div>
            </div>
            <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed flex-2 h-[100%] hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
                <img src={digitalmedia} alt="21 Digital Media screenshot" className="w-full h-[50%] object-cover rounded-md"/>
                <h1 className="text-lg">21 Digital Media</h1>
                <p className="text-xs text-zinc-500">React | Netlify</p>
                <p>21 Digital Media is a digital marketing agency that leverages AI-powered tools to provide innovative solutions for businesses looking to enhance their online presence.</p>
                <div className="flex flex-row gap-4 mt-auto">
                    <a href="https://www.21digital.media" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaLink></FaLink>Visit</a>
                </div>
            </div>
            <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed flex-2 h-[100%] hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
                <img src={lavishlandscapes} alt="Lavish Landscapes screenshot" className="w-full h-[50%] object-cover rounded-md"/>
                <h1 className="text-lg">Lavish Landscapes</h1>
                <p className="text-xs text-zinc-500">React | Netlify</p>
                <p>Lavish Landscapes is a professional landscaping company website featuring service portfolios, project galleries, and an integrated contact system. Built with React for a responsive, modern user experience.</p>
                <div className="flex flex-row gap-4 mt-auto">
                    <a href="https://www.lavishlandscapesny.com" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaLink></FaLink>Visit</a>
                </div>
            </div>
            <div className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-4 flex flex-col gap-4 text-neutral-300 text-sm leading-relaxed flex-2 h-[100%] hover:shadow-2xl hover:translate-y-[-2px] transition-all duration-300">
                <img src={javascriptwrestlers} alt="Javascript Wrestlers Screenshot" className="w-full h-[50%] object-cover rounded-md"/>
                <h1 className="text-lg">Javascript Wrestlers</h1>
                <p className="text-xs text-zinc-500">HTML | CSS | JavaScript</p>
                <p>JavaScript Wrestlers is a web-based simulation where users watch as wrestlers battle against each other. At the end of each match, a winner is named and moves on to the next round, until one wrestler remains. This was created as a take-home project portion of an interview.</p>
                <div className="flex flex-row gap-4 mt-auto">
                    <a href="https://github.com/noahvogtli/ProWrestlingTournament" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaGithub></FaGithub>Github</a>
                    <a href="http://javascriptwrestlers.netlify.app/" target="_blank" className="flex-1 bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex justify-center items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaLink></FaLink>Visit</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;