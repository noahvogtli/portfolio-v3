import React from "react";

function Footer() {
    return (
        <footer className="w-full bg-[#171717] text-white p-10 mt-16 text-center text-sm border-t border-neutral-700">
            <p>&copy; {new Date().getFullYear()} Noah Vogtli. All rights reserved.</p>
        </footer>
    )
}

export default Footer;