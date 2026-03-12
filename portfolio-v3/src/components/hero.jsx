import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Socials from "./socials";
import TechStack from "./techstack";
import { FaFolder, FaUser, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";
import portrait from "../assets/portrait.png";
import { GitHubCalendar } from "react-github-calendar";

const calendarTheme = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};


function isIOSDevice() {
    if (typeof navigator === "undefined") {
        return false;
    }

    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function resumeLink() {
    const resumeUrl = "/NoahVogtliResume.pdf";
    if (isIOSDevice()) {
        window.open(resumeUrl, "_blank");
    } else {
        window.open("/resume", "_blank");
    }
}

function Hero() {
    const calendarScrollRef = useRef(null);
    const calendarContentRef = useRef(null);

    useEffect(() => {
        const scrollContainer = calendarScrollRef.current;
        const content = calendarContentRef.current;

        if (!scrollContainer || !content) {
            return;
        }

        const scrollToNewest = () => {
            if (window.innerWidth >= 768) {
                return;
            }

            scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        };

        const frameId = requestAnimationFrame(scrollToNewest);
        const resizeObserver = new ResizeObserver(scrollToNewest);
        resizeObserver.observe(content);
        window.addEventListener("resize", scrollToNewest);

        return () => {
            cancelAnimationFrame(frameId);
            resizeObserver.disconnect();
            window.removeEventListener("resize", scrollToNewest);
        };
    }, []);

    return (
        <>
        <div className="mt-32 md:mt-42 flex flex-col items-start">
            <div className="flex flex-row items-start md:items-center">
                <div className="w-28 h-28 md:w-46 md:h-46 rounded-full overflow-hidden shrink-0">
                    <img src={portrait} alt="Portrait of Noah" className="w-full h-full object-cover object-[50%_-10%] scale-155"/>
                </div>
                <div className="flex flex-col ml-[6%] text-left">
                    <h1 className="text-2xl md:text-5xl font-bold text-white whitespace-nowrap">Noah Vogtli</h1>
                    <p className="text-left mt-[4%] text-neutral-500 italic md:whitespace-nowrap">Software Engineering Student at RIT</p>
                    <Socials />
                </div>
            </div>
            <p className="md:text-lg mt-10 md:mt-8 text-neutral-500 text-left w-[100%]]">I'm a fourth-year student at Rochester Institute of Technology pursuing my Bachelor of Science in Software Engineering and current intern at Kodak.<br></br> I'm passionate about building clean, reliable web applications using frameworks like React.</p>
            <div className="flex flex-row mt-8 mb-8 md:gap-6 gap-4">
                <Link to="/about" className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-500"><FaUser />About</Link>
                <a href="#projects" className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaFolder />Projects</a>
                <a onClick={resumeLink} className="bg-neutral-800 rounded-xl pl-4 pr-4 pt-2 pb-2 border border-neutral-700 inline-flex items-center gap-2 transition-colors duration-200 hover:bg-neutral-700 hover:border-neutral-600"><FaFileAlt />Resume<FaExternalLinkAlt size={12} className="hidden md:block"/></a>                
            </div>
            <TechStack />
            <div className="mt-20 w-full">
                <div ref={calendarScrollRef} className="bg-[#1e1e1e] border border-neutral-700 rounded-xl p-6 overflow-x-auto">
                    <div ref={calendarContentRef} className="min-w-max text-neutral-300 md:pr-0 pr-6">
                        <GitHubCalendar
                            username="noahvogtli"
                            colorScheme="dark"
                            theme={calendarTheme}
                            blockSize={12}
                            blockMargin={5}
                            fontSize={12}
                            hideColorLegend
                        />
                    </div>
                </div>
            </div>
        </div>
        <div id="projects"></div>
        </>
    )
}

export default Hero;