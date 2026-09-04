import { useEffect, useState } from 'react'
import { Github, Linkedin, Code2, Sun, Moon, Menu, X } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ theme, toggleTheme, sections }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <button
            className="navbar-logo"
            onClick={() => scrollTo('home')}
            aria-label="Go to top"
          >
            {portfolioData.name.toUpperCase()}<span>.</span>
          </button>

          <nav className="navbar-links" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={active === item.id ? 'active' : ''}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="navbar-actions">
            <a className="icon-btn" href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github size={17} />
            </a>
            <a className="icon-btn" href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={17} />
            </a>
            <a className="icon-btn" href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">
              <Code2 size={17} />
            </a>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <button
          className="icon-btn"
          style={{ position: 'absolute', top: 24, right: 24 }}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
        {NAV_ITEMS.map((item) => (
          <button key={item.id} onClick={() => scrollTo(item.id)}>
            {item.label}
          </button>
        ))}
        <div className="navbar-actions">
          <a className="icon-btn" href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github size={17} />
          </a>
          <a className="icon-btn" href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={17} />
          </a>
          <a className="icon-btn" href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">
            <Code2 size={17} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
