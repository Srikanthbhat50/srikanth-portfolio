import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Code2, Send } from 'lucide-react'
import portfolioData from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.'
    }
    if (!form.subject.trim()) next.subject = 'Please add a subject.'
    if (!form.message.trim()) next.message = 'Please write a message.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSent(false)
      return
    }
    // Frontend-only portfolio: no backend is configured, so this opens
    // the visitor's email client with the message pre-filled rather than
    // pretending to send it directly.
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    )
    const mailto = `${portfolioData.emailHref}?subject=${encodeURIComponent(form.subject)}&body=${body}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className="section" style={{ borderBottom: 'none' }}>
      <div className="container">
        <Reveal as="div" className="section-head">
          <span className="section-kicker">09 · Contact</span>
          <h2>Let's Connect</h2>
          <p>Connect with me to learn more about my professional journey, or send a message directly.</p>
        </Reveal>

        <div className="contact-grid">
          <Reveal>
            <a className="card contact-info-card" href={portfolioData.emailHref}>
              <div className="icon-wrap"><Mail size={18} /></div>
              <div>
                <div className="label">Email</div>
                <div className="value">{portfolioData.email}</div>
              </div>
            </a>
            <a className="card contact-info-card" href={portfolioData.phoneHref}>
              <div className="icon-wrap"><Phone size={18} /></div>
              <div>
                <div className="label">Phone</div>
                <div className="value">{portfolioData.phone}</div>
              </div>
            </a>
            <div className="contact-social">
              <a className="icon-btn" href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Github size={17} />
              </a>
              <a className="icon-btn" href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={17} />
              </a>
              <a className="icon-btn" href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode profile">
                <Code2 size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className={`form-field ${errors.name ? 'error' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className={`form-field ${errors.email ? 'error' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>
              </div>
              <div className={`form-field ${errors.subject ? 'error' : ''}`}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
                {errors.subject && <span className="form-error">{errors.subject}</span>}
              </div>
              <div className={`form-field ${errors.message ? 'error' : ''}`}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>
              <button className="btn btn-primary" type="submit" style={{ justifySelf: 'start' }}>
                Send Message <Send size={16} />
              </button>
              {sent && (
                <p className="form-success">
                  Your email client should now be open with your message ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
