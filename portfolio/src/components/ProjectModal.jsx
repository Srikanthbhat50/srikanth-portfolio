import { useEffect, useRef } from 'react'
import { X, Github, ExternalLink } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    modalRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!project) return null

  return (
    <div className="modal-overlay" onMouseDown={onOverlayClick}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={modalRef}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">
          <X size={18} />
        </button>
        <h3 id="modal-title">{project.name}</h3>
        <span className="project-role">{project.role}</span>
        <p className="desc">{project.description}</p>

        <h5>Key Features</h5>
        <ul className="feature-list">
          {project.features.map((f) => <li key={f}>{f}</li>)}
        </ul>

        <h5>Technologies</h5>
        <div className="project-tech">
          {project.technologies.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="modal-actions">
          {project.githubUrl ? (
            <a className="btn btn-primary" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} /> View Code
            </a>
          ) : (
            <button className="btn btn-ghost" aria-disabled="true" disabled>
              <Github size={16} /> Repository Coming Soon
            </button>
          )}
          {project.liveUrl ? (
            <a className="btn btn-outline" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} /> Live Demo
            </a>
          ) : (
            <button className="btn btn-ghost" aria-disabled="true" disabled>
              <ExternalLink size={16} /> Live Demo Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
