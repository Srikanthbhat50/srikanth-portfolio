import { Github, Code2, ArrowUpRight } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">08 · Coding Profiles</span>
          <h2>Where I write and practice code</h2>
        </Reveal>

        <div className="profiles-grid">
          <Reveal as="div" className="card profile-card">
            <div className="icon-wrap"><Github size={24} /></div>
            <div>
              <h3>GitHub</h3>
              <span className="handle">@{portfolioData.githubHandle}</span>
            </div>
            <p>Explore my repositories and coding projects.</p>
            <a className="btn btn-primary" href={portfolioData.github} target="_blank" rel="noopener noreferrer">
              View GitHub Profile <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <Reveal as="div" className="card profile-card" delay={80}>
            <div className="icon-wrap"><Code2 size={24} /></div>
            <div>
              <h3>LeetCode</h3>
              <span className="handle">@{portfolioData.leetcodeHandle}</span>
            </div>
            <p>Practice, problem solving and continuous improvement.</p>
            <a className="btn btn-primary" href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer">
              View My LeetCode Profile <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
