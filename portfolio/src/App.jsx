import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'
import CodingProfiles from './components/CodingProfiles.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'

const SECTIONS = [
  'home', 'about', 'skills', 'projects', 'education',
  'experience', 'certifications', 'achievements', 'contact',
]

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} sections={SECTIONS} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Certifications />
        <Achievements />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
