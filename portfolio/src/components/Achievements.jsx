import { Trophy } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">07 · Achievements</span>
          <h2>Achievements</h2>
        </Reveal>

        <div className="achievement-grid">
          {portfolioData.achievements.map((item, i) => (
            <Reveal as="div" className="card achievement-card" key={item.title} delay={i * 70}>
              <div className="icon-wrap"><Trophy size={20} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
