import React from "react";

let skills = ["Java", "Python", "JavaScript", "React", "Node.js", "Express.js", "SQL", "Git", "Docker", "AWS"];


function TechStack() {
    return(
        <>  

            <div className="flex flex-row items-center mt-20 w-full flex-wrap justify-center" id="techstack">
                {skills.map((skill, index) => (
                    <span key={index} className="m-2 p-1 pl-2 pr-2 border border-zinc-400 rounded-xl text-center text-sm">{skill}</span>
                ))}
            </div>
        </>
    );
}

export default TechStack;