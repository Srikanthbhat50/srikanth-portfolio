import { useState } from 'react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">01 · About</span>
          <h2>A closer look at who I am</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="about-portrait">
              {!imgError ? (
                <img
                  src={portfolioData.profileImage}
                  alt={portfolioData.name}
                  onError={() => setImgError(true)}
                />
              ) : (
                <span className="placeholder">{portfolioData.initials}</span>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="about-text">
              <p>{portfolioData.summary}</p>
            </div>
            <div className="about-cards">
              {portfolioData.aboutCards.map((card) => (
                <div className="card about-card" key={card.title}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
