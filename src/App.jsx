import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Layout from './components/Layout'
import About from './components/About'
import ExchangeRates from './components/Exchange'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'app dark' : 'app'} style={{
        backgroundColor: darkMode ? '#1f2937' : '#ffffff',
        minHeight: '100vh',
        width: '100%'
    }}>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/exchange" element={<ExchangeRates darkMode={darkMode}/>} />
        </Routes>
       
    </div>
  )
}

export default App
