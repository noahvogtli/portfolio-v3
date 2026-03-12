import React, { useEffect } from "react";

const RESUME_URL = "/NoahVogtliResume.pdf";

function isIOSDevice() {
    if (typeof navigator === "undefined") {
        return false;
    }

    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function Resume() {
    const isIOS = isIOSDevice();

    useEffect(() => {
        if (isIOS) {
            window.open(RESUME_URL, "_blank");
        }
    }, [isIOS]);

    if (isIOS) {
        return null;
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
