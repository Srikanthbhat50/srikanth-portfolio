import { useState } from 'react'
import portfolioData from '../data/portfolioData.js'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import Reveal from './Reveal.jsx'

function Projects() {
  const [filter, setFilter] = useState('All')
  const [activeProject, setActiveProject] = useState(null)

  const filtered = portfolioData.projects.filter(
    (p) => filter === 'All' || p.category === filter
  )

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">03 · Projects</span>
          <h2>Featured Projects</h2>
          <p>Not just what I can build — here's what I actually have.</p>
        </Reveal>

        <div className="project-filters">
          {portfolioData.projectFilters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHidden={!filtered.includes(project)}
              onViewDetails={setActiveProject}
            />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}

export default Projects
