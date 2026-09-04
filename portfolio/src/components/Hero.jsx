import { useEffect, useState } from 'react'
import { ArrowRight, Download, Mail } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'

function useTypingWords(words, speed = 90, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0])
      return
    }
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

function Hero() {
  const typed = useTypingWords(portfolioData.taglineWords)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div>
          <span className="hero-eyebrow">
            <span className="dot" />
            Open to Software Developer &amp; AI/ML Internship roles
          </span>
          <h1>Hi, I'm {portfolioData.name}</h1>
          <p className="hero-role">
            {typed}
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="hero-summary">{portfolioData.summary}</p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View My Projects <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
            <a className="btn btn-ghost" href={portfolioData.resume} download>
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>

        <div>
          <div className="hero-panel">
            <div className="hero-panel-bar">
              <span /><span /><span />
            </div>
            <pre>
<span className="tok-com">{'// profile.py'}</span>{'\n'}
<span className="tok-key">class</span> Developer:{'\n'}
{'    '}<span className="tok-key">def</span> __init__(self):{'\n'}
{'        '}self.name = <span className="tok-str">"{portfolioData.name}"</span>{'\n'}
{'        '}self.role = <span className="tok-str">"MCA Student"</span>{'\n'}
{'        '}self.stack = [<span className="tok-str">"Python"</span>, <span className="tok-str">"JavaScript"</span>,{'\n'}
{'                      '}<span className="tok-str">"MySQL"</span>, <span className="tok-str">"AI/ML"</span>]{'\n'}
{'        '}self.learning = <span className="tok-key">True</span>
            </pre>
          </div>
          <div className="hero-floating-tags" aria-hidden="true">
            <span>Python</span>
            <span>JavaScript</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>AI/ML</span>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll to About section">
        <span className="line" />
        SCROLL
      </button>
    </section>
  )
}

export default Hero
