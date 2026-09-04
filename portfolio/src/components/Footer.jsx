import portfolioData from '../data/portfolioData.js'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={portfolioData.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
          <a href={portfolioData.emailHref}>Email</a>
        </div>
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Built with React &amp; Vite.</p>
      </div>
    </footer>
  )
}

export default Footer
