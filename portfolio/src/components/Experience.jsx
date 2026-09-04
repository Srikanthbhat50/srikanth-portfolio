import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">05 · Experience</span>
          <h2>Experience &amp; Practical Work</h2>
        </Reveal>

        <div className="experience-grid">
          {portfolioData.experience.map((item, i) => (
            <Reveal as="div" className="card experience-card" key={item.role + item.context} delay={i * 70}>
              <p className="role">{item.role}</p>
              <span className="context">{item.context}</span>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="experience-note">{portfolioData.experienceNote}</p>
        </Reveal>
      </div>
    </section>
  )
}

export default Experience
