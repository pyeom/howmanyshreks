import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import Converter from './components/Converter'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Converter />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/converter" element={<Converter />} />
          <Route path="/interesting" element={<h1>Interesting Facts</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
