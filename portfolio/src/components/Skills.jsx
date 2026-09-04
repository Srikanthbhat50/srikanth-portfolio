import { Code, Globe, Database, Wrench } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

const ICONS = {
  'Programming Languages': Code,
  'Web Technologies': Globe,
  'Databases': Database,
  'Tools & Platforms': Wrench,
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">02 · Skills</span>
          <h2>What I build with</h2>
          <p>Technologies I've used and can confidently talk through in an interview.</p>
        </Reveal>

        <div className="skills-grid">
          {portfolioData.skills.map((group, i) => {
            const Icon = ICONS[group.category] || Code
            return (
              <Reveal key={group.category} delay={i * 60}>
                <div className="card skill-card">
                  <h3><Icon size={16} style={{ verticalAlign: '-3px', marginRight: 8, color: 'var(--accent)' }} />{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span className="skill-tag" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
