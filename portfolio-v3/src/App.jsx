import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import AppSidebar from './components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import Socials from './components/socials'
import { Button } from "@/components/ui/button"
import AboutMe from './components/aboutMe'
import ContactModal from './components/contactmodal'
import TechStack from './components/techstack'

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <Navbar />
      <div className="md:w-1/3 w-3/4 flex flex-col items-center m-auto mt-0 pt-30" id='home'>
        <div className='size-[100px] rounded-full overflow-hidden shadow-lg'>
          <img src='src/assets/2285A3A2-F19C-40F2-A2FA-9A9BEA55350F.png' alt="Portfolio Image" className='size-full object-cover object-[center_-5%] scale-150' />
        </div>
        <h1 className="mt-10 text-2xl font-semibold ">Noah Vogtli</h1>
        <p className="mt-[5%] mb-[2%] text-center text-sm font-medium">I am a Software Engineering student at Rochester Institute of Technology focused on building clean, reliable web applications and practical tools that solve real problems.</p>
        <Socials onEmailClick={() => setIsContactOpen(true)} />
        <Button variant="ghost" className="mt-[10%] hover:bg-gray-200 hover:cursor-pointer border border-zinc-200"><a href="#about">About Me →</a></Button>
        <TechStack />
        <div className='mt-100'>

        </div>
        <AboutMe />
        {/* <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} /> */}
        <div className='mt-100'>

        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
