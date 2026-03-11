import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './pages/About'

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
    </BrowserRouter>
  )
}

export default App
