import React from "react";

function Policy() {
    return (
        <div className="w-[90dvw] md:w-[50dvw] mx-auto mt-32 md:mt-42 pb-20 text-neutral-300">
            <h1 className="text-3xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-4 text-sm text-neutral-500">Last updated: March 11, 2026</p>

            <div className="mt-10 space-y-8 text-sm leading-relaxed">
                <section>
                    <h2 className="text-white text-lg font-semibold">Overview</h2>
                    <p className="mt-2">
                        This website (noahvogtli.com) is a personal portfolio operated by Noah Vogtli. This Privacy Policy
                        explains what information may be collected when you visit the site and how that information is used.
                    </p>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">Information Collected</h2>
                    <p className="mt-2">When you browse this website, the following categories of information may be collected:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                        <li>Basic usage data, such as pages visited, time on page, and referral source.</li>
                        <li>Technical details, such as device type, browser, and approximate geographic region.</li>
                        <li>Cookies or similar technologies used for analytics functionality.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">Analytics</h2>
                    <p className="mt-2">
                        This website uses Google Analytics to understand aggregate traffic and improve the site experience.
                        Google Analytics may process information such as page interactions, browser/device metadata, and IP-derived
                        location data according to Google's privacy practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">How Information Is Used</h2>
                    <p className="mt-2">Collected data is used only to:</p>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                        <li>Measure site performance and traffic trends.</li>
                        <li>Improve content, design, and user experience.</li>
                        <li>Maintain website reliability and security.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">Your Choices</h2>
                    <p className="mt-2">
                        You can control or block cookies through your browser settings. You can also use the
                        Google Analytics Opt-out Browser Add-on to prevent analytics tracking.
                    </p>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">Third-Party Links</h2>
                    <p className="mt-2">
                        This site may link to external websites (for example, GitHub, LinkedIn, or other services). These
                        websites have their own privacy policies and practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-white text-lg font-semibold">Contact</h2>
                    <p className="mt-2">
                        For privacy-related questions, contact: <a className="underline text-neutral-200" href="mailto:noahvogtli@gmail.com">noahvogtli@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default Policy;