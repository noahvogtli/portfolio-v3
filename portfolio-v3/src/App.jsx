import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './pages/About'
import Footer from './components/footer'
import Resume from './pages/Resume'
import Policy from './pages/Policy'
import Projects from './components/projects'

function Layout() {
  const location = useLocation()
  const isResume = location.pathname === '/resume'

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <>
      {!isResume && <Navbar />}
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<div className="w-[90dvw] md:w-[50dvw] mx-auto"><Hero /><div><Projects /></div></div>} />
        <Route path="/about" element={<div className="w-[90dvw] md:w-[50dvw] mx-auto"><About /></div>} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isResume && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
