import { Award } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">06 · Certifications</span>
          <h2>Certifications</h2>
        </Reveal>

        <div className="cert-grid">
          {portfolioData.certifications.map((cert, i) => (
            <Reveal as="div" className="card cert-card" key={cert.name} delay={i * 70}>
              <div className="icon-wrap"><Award size={20} /></div>
              <div>
                <h3>{cert.name}</h3>
                <p className="meta">{cert.issuer} · {cert.year}</p>
                {cert.url ? (
                  <a className="cert-link" href={cert.url} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                ) : (
                  <span className="cert-link">Certificate Link Coming Soon</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
