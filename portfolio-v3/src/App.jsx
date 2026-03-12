import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './pages/About'
import Footer from './components/footer'
import Resume from './pages/Resume'

function Layout() {
  const location = useLocation();
  const isResume = location.pathname === '/resume';

  return (
    <>
      {!isResume && <Navbar />}
      <Routes>
        <Route path="/resume" element={<Resume />} />
        <Route path="/" element={<div className="w-[90dvw] md:w-[50dvw] mx-auto"><Hero /></div>} />
        <Route path="/about" element={<div className="w-[90dvw] md:w-[50dvw] mx-auto"><About /></div>} />
      </Routes>
      {!isResume && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
