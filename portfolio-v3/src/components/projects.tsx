import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { FaGithub, FaLink} from 'react-icons/fa'
import { Separator } from "@/components/ui/separator"
import verseVisionLogo from '@/assets/versevisionlogo.png'
import jsWrestlersImage from '@/assets/javascriptwrestlers.png'


function Projects() {
    return(
        <>
            <div className="flex flex-col items-center m-auto md:mt-5">
                <h1 className="text-2xl font-semibold mb-10 border-b border-zinc-200 pb-5 w-full text-center">Projects</h1>            
                <Card className="relative mx-auto w-full max-w-lg overflow-hidden rounded-xl pt-0">
                    <div className="absolute inset-0 z-30 aspect-video" />
                    <img
                        src={verseVisionLogo}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                <CardHeader>
                    <CardAction>
                    </CardAction>
                    <CardTitle>VerseVision</CardTitle>
                    <CardDescription className="text-sm text-zinc-500">
                    React | Anthropic | Render | Node.js | Express | Supabase
                    </CardDescription>
                    <CardDescription className="mt-2">VerseVision is an AI-powered tool designed to help you dive deeper into scripture by breaking down verses with historical context, theological insights, and real-world applications.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-row justify-evenly w-full">
                        <Button variant="link"><FaLink size={22} className="hover:fill-red-800 hover:scale-110"/><a href="https://www.versevision.net" target="_blank">Visit</a></Button>
                        <Button variant="link"><FaGithub size={22} className="hover:fill-red-800 hover:scale-110"/><a href="https://github.com/noahvogtli/VerseVision" target="_blank">GitHub</a></Button>
                    </div>
                </CardFooter>
                </Card>
                <Card className="relative mx-auto w-full max-w-lg overflow-hidden rounded-xl pt-0 mt-20">
                    <div className="absolute inset-0 z-30 aspect-video" />
                    <img
                        src={jsWrestlersImage}
                        alt="Event cover"
                        className="relative z-20 aspect-video w-full object-cover"
                    />
                <CardHeader>
                    <CardAction>
                    </CardAction>
                    <CardTitle>JavaScript Wrestlers</CardTitle>
                    <CardDescription className="text-sm text-zinc-500">
                    HTML | CSS | JavaScript
                    </CardDescription>
                    <CardDescription className="mt-2">JavaScript Wrestlers is a web-based simulation where users watch as wrestlers battle against each other. At the end of each match, a winner is named and moves on to the next round, until one wrestler remains. This was created as a take-home project portion of an interview.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <div className="flex flex-row justify-evenly w-full">
                        <Button variant="link"><FaLink size={22} className="hover:fill-red-800 hover:scale-110"/><a href="https://javascriptwrestlers.netlify.app/" target="_blank">Visit</a></Button>
                        <Button variant="link"><FaGithub size={22} className="hover:fill-red-800 hover:scale-110"/><a href="https://github.com/noahvogtli/ProWrestlingTournament" target="_blank">GitHub</a></Button>
                    </div>
                </CardFooter>
                </Card>
            </div>
        </>
    );
}

export default Projects;