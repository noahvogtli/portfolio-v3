import React from "react";

const RESUME_URL = "/NoahVogtliResume.pdf";

function isIOSDevice() {
    if (typeof navigator === "undefined") {
        return false;
    }

    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function Resume() {
    if (isIOSDevice()) {
        return (
            <div className="min-h-[100svh] w-full flex items-center justify-center px-6 bg-[#171717]">
                <div className="w-full max-w-md bg-[#1e1e1e] border border-neutral-700 rounded-xl p-6 text-center">
                    <h1 className="text-white text-xl font-semibold">Resume</h1>
                    <p className="text-neutral-400 mt-2 text-sm">
                        For best viewing on iPhone/iPad, open the PDF directly.
                    </p>
                    <a
                        href={RESUME_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center justify-center bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 hover:border-neutral-600 transition-colors duration-200 rounded-xl px-4 py-2"
                    >
                        Open Resume
                    </a>
                </div>
            </div>
        );
    }

    return (
        <iframe
            typeof="pdf"
            src={RESUME_URL}
            className="block w-screen max-w-full h-[100svh] border-0"
            title="Resume"
            />
    );
}

export default Resume;
