import React from "react";

let skills = ["Java", "Python", "JavaScript", "React", "Node.js", "Express.js", "SQL", "PostgreSQL", "Git", "Docker", "AWS"];


function TechStack() {
    return(
        <>  

            <div className="flex flex-row items-center mt-10 md:mt-20 w-full flex-wrap justify-center" id="techstack">
                {skills.map((skill, index) => (
                    <a key={index} className="m-2 p-1 pl-2 pr-2 border border-zinc-400 rounded-xl text-center text-md hover:border-red-700 cursor-default select-none">{skill}</a>
                ))}
            </div>
        </>
    );
}

export default TechStack;