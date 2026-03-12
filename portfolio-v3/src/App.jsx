import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './pages/About'
import Footer from './components/footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="w-[90dvw] md:w-[50dvw] mx-auto">
        <Routes>
          <Route path="/" element={
            <Hero />
            
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
