import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';
import {ThemeProvider} from "./themeContext";


function App() {

  return (
    <>
        <ThemeProvider>

   <Router>
      <Routes>
      <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>   
    </ThemeProvider>
 </>
  )
}

export default App
