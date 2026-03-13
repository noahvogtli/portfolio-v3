import React from "react";
import { FaReact, FaJava, FaPython, FaDocker, FaAws, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiPostgresql, SiSpringboot, SiFlask, SiVite } from "react-icons/si";

const stack = [
    { icon: <FaReact />,        label: "React",        color: "text-cyan-400" },
    { icon: <SiJavascript />,   label: "JavaScript",   color: "text-yellow-400" },
    { icon: <SiTypescript />,   label: "TypeScript",   color: "text-blue-400" },
    { icon: <SiTailwindcss />,  label: "Tailwind CSS", color: "text-cyan-500" },
    { icon: <SiVite />,         label: "Vite",         color: "text-purple-400" },
    { icon: <FaJava />,         label: "Java",         color: "text-orange-400" },
    { icon: <SiSpringboot />,   label: "Spring Boot",  color: "text-green-500" },
    { icon: <FaPython />,       label: "Python",       color: "text-sky-400" },
    { icon: <SiFlask />,        label: "Flask",        color: "text-neutral-300" },
    { icon: <SiPostgresql />,   label: "PostgreSQL",   color: "text-blue-500" },
    { icon: <FaDocker />,       label: "Docker",       color: "text-blue-400" },
    { icon: <FaAws />,          label: "AWS",          color: "text-orange-400" },
];

function TechStack() {
    return (
        <div className="mt-8 w-full">
            <h2 className="text-neutral-500 text-sm uppercase tracking-widest mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-4 ">
                {stack.map(({ icon, label, color }) => (
                    <div
                        key={label}
                        className="flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-xl px-3 py-2 text-sm text-neutral-300 select-none"
                    >
                        <span className={`text-base ${color}`}>{icon}</span>
                        {label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;
