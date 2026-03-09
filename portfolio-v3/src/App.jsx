import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import AppSidebar from './components/sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import Socials from './components/socials'
import { Button } from "@/components/ui/button"
import ContactModal from './components/contactmodal'
import TechStack from './components/techstack'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About'
import Projects from './components/projects'
import profileImage from './assets/2285A3A2-F19C-40F2-A2FA-9A9BEA55350F.png'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [location])

  return null
}

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <BrowserRouter>
    <SidebarProvider defaultOpen={false}>
      <ScrollToHash />
      <AppSidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={
        <>
          <div className="md:w-7/24 w-3/4 flex flex-col items-center m-auto md:mt-5 pt-30" id='home'>
            <div className='size-[100px] rounded-full overflow-hidden shadow-sm'>
              <img src={profileImage} alt="Portfolio Image" className='size-full object-cover object-[center_-5%] scale-150' />
            </div>
            <h1 className="mt-5 text-2xl font-semibold ">Noah Vogtli</h1>
            <p className="mt-[5%] mb-[2%] text-center text-[15px]/7">I'm a Software Engineering student at Rochester Institute of Technology and current intern at Kodak. I'm passionate about building clean, reliable web applications using frameworks like React. Over the past 4 years, I've worked on various projects that have honed my skills in full-stack development and problem-solving.</p>
            <Socials onEmailClick={() => setIsContactOpen(true)} />
                <Button asChild variant="link" className="md:mt-[10%] hover:cursor-pointer">
                <Link to="/about">About Me ➡ </Link>
                </Button>
            <TechStack />
            <div id="projects"></div>
            <div className='mt-30'>
              <Projects />
            </div>
            <div className='mt-25'>
              <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
            </div>
          </div>
        </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </SidebarProvider>
    </BrowserRouter>
  )
}

export default App
