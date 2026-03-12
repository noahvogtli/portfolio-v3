import React from "react";
import { Link } from "react-router-dom";
import Updated from "./updated";

function Footer() {
    return (
        <footer className="w-full bg-[#171717] text-white pt-10 pb-10 mt-16 text-center text-sm border-t border-neutral-700">
            <div className="text-xs md:text-sm flex flex-row w-[80%] md:w-[50%] mx-auto items-center justify-between">
                <p>&copy; {new Date().getFullYear()} Noah Vogtli. All rights reserved.</p>
                <p>
                    <Link to="/policy" className="text-neutral-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
                </p>
            </div>
            <Updated />
        </footer>
    )
}

export default Footer;