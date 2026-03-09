import React from 'react'
import profileImage from '../assets/2285A3A2-F19C-40F2-A2FA-9A9BEA55350F.png'

function About() {
	return (
		<main className="md:w-7/24 w-3/4 flex flex-col items-center m-auto md:mt-5 pt-30">
            <div className='size-[100px] rounded-full overflow-hidden shadow-sm'>
                            <img src={profileImage} alt="Portfolio Image" className='size-full object-cover object-[center_-5%] scale-150' />
            </div>
			<div className="flex flex-col mt-5" id="about">
                <h1 className="text-2xl font-semibold text-center">About Me:</h1>
                <p className='text-sm mt-4 text-zinc-600 text-center'>Get to know me better through my experiences, projects, and hobbies</p>

                <h1 className='mt-20 text-left font-bold'>Background:</h1>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">
                    I am a fourth-year Software Engineering student at the Rochester Institute of Technology, where I focus on full-stack development, clean software architecture, and applying software engineering principles to real-world problems.
                </p>
                <br></br>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">
                    I started programming in high school and quickly became interested in turning ideas into tools with real impact. During my time at RIT, I have strengthened my problem-solving skills through coursework and projects, and I have gained hands-on experience collaborating in team-based environments that mirror real-world development workflows.
                </p>
                <br></br>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">My experience includes working with a variety of programming languages, including Java and Python. I have also worked with web development technologies such as HTML, CSS, and JavaScript.</p>
                <h1 className='mt-20 text-left font-bold'>Experience:</h1>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">Throughout school, I was able to gain valuable experience through two co-ops. As a Digital Marketing / Marketing Analysis Intern at Eastman Kodak Company, I developed B2B and B2C email campaigns using HTML and CSS while helping manage and organize email lists through Microsoft Excel, Salesforce, Marketing Cloud, and Pardot.</p>
                <br></br>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">In this role, I collaborated with a team of four to build email content within specific word count and timeline requirements, and I also created an HTML template in Pardot that allowed colleagues without coding experience to produce campaigns more efficiently.</p>
                <br></br>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">Additionally, I was given the task to automate lead generations through forms. Before, every submission from lead generation forms had to be processed individually, consuming significant time. This also was prone to user error due to information being put in manually. I was able to generate and modify code that allowed data to be processed directly from the user form, to be created into a lead in Salesforce.</p>
                <h1 className='mt-20 text-left font-bold'>Life Outside of Software Engineering:</h1>
                <p className="mt-4 text-center max-w-2xl text-sm/6 text-left">Outside of software engineering, I enjoy playing and watching sports, especially basketball. I also enjoy traveling and exploring new places, as well as trying out new restaurants and cuisines.</p>
            </div>
		</main>
	)
}

export default About
