import React, { useRef, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'


const App = () => {

  const [dark, setDark] = useState(false)
  const handleToggleDark = (data) => {
    setDark(data)
  }

  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const ServicesRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (section) => {
    switch(section.link){
      case 'Home':
        homeRef.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'About':
        aboutRef.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'Services':
        ServicesRef.current.scrollIntoView({behavior: 'smooth'})
        break;
      case 'Contact':
        contactRef.current.scrollIntoView({behavior: 'smooth'})
        break;
      default:
        break;
    }
  }

  return <div className={`${dark ? 'bg-[#1E201E] text-[#F7F7F8]' : 'bg-white text-[#3A1078]'}`}>
    <BrowserRouter>
      <Navbar scrollToSection={scrollToSection} takeMode={handleToggleDark} />
      <HeroSection ref={homeRef} mode={dark} />
      <Services ref={ServicesRef} mode={dark} />
      <hr />
      <About ref={aboutRef} mode={dark} />
      <Contact ref={contactRef} mode={dark} />
      <Footer />
      <Toaster reverseOrder={true} />
    </BrowserRouter>
  </div>
}

export default App
