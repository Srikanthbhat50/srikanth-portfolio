import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">04 · Education</span>
          <h2>Academic Timeline</h2>
        </Reveal>

        <div className="timeline">
          {portfolioData.education.map((item) => (
            <Reveal as="div" className="timeline-item" key={item.degree}>
              <span className="duration">{item.duration}</span>
              <h3>{item.degree}</h3>
              <p className="institution">{item.institution}</p>
              {item.detail && <span className="detail">{item.detail}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
