import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'
import Projects from './Components/Projects.jsx';
import MainContact from './Components/MainContact.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<MainContact />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
