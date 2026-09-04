import { FolderGit2, Github, ExternalLink } from 'lucide-react'

function ProjectCard({ project, isHidden, onViewDetails }) {
  return (
    <div className={`card project-card ${isHidden ? 'hidden-card' : ''}`}>
      <div className="project-thumb">
        <span className="thumb-tag">{project.category}</span>
        <FolderGit2 size={40} className="thumb-icon" />
      </div>
      <div className="project-body">
        <h3>{project.name}</h3>
        <span className="project-role">{project.role}</span>
        <p>{project.shortDescription}</p>
        <div className="project-tech">
          {project.technologies.map((t) => <span key={t}>{t}</span>)}
        </div>
        <div className="project-actions">
          <button className="btn btn-outline" onClick={() => onViewDetails(project)}>
            View Details
          </button>
          {project.githubUrl ? (
            <a className="btn btn-ghost" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> Code
            </a>
          ) : (
            <button className="btn btn-ghost" aria-disabled="true" disabled>
              <Github size={15} /> Coming Soon
            </button>
          )}
          {project.liveUrl ? (
            <a className="btn btn-ghost" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} /> Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
