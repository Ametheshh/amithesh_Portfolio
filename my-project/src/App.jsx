import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Scroll listener for potential future animations
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle('light-mode')
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Theme Toggle */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle theme"
        title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Amithesh Sequiera</h1>
          <p className="tagline">Cybersecurity Specialist & Full-Stack Developer</p>
          <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: 'var(--text-tertiary)' }}>
            Building secure, resilient systems through ethical hacking & intelligent threat detection
          </p>
          <div className="hero-cta">
            <button onClick={() => scrollToSection('projects')}>View Work</button>
            <button className="secondary" onClick={() => scrollToSection('contact')}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About</h2>
              <p>
                I'm a Computer Science and Cybersecurity student passionate about securing systems, conducting penetration testing, and solving real-world security challenges. With hands-on VAPT experience and a competitive CTF background, I combine technical depth with a strategic mindset.
              </p>
              <p>
                My work spans vulnerability assessment, threat detection, and building secure authentication systems. I believe cybersecurity is about proactive defense — identifying risks before they become breaches.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)' }}>
                📍 Mangaluru, Karnataka • +91 9481057182 • <a href="mailto:iamamithesh@gmail.com">iamamithesh@gmail.com</a>
              </p>
            </div>
            <div className="avatar">
              <div className="avatar-text">AS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="tag">Python</span>
                <span className="tag">JavaScript</span>
                <span className="tag">SQL</span>
                <span className="tag">Java</span>
                <span className="tag">C</span>
                <span className="tag">HTML/CSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Security</h3>
              <div className="skill-tags">
                <span className="tag">VAPT</span>
                <span className="tag">Threat Detection</span>
                <span className="tag">Network Security</span>
                <span className="tag">Burp Suite</span>
                <span className="tag">Kali Linux</span>
                <span className="tag">Wireshark</span>
                <span className="tag">Nmap</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Tech Stack</h3>
              <div className="skill-tags">
                <span className="tag">Node.js</span>
                <span className="tag">React</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Git</span>
                <span className="tag">Jenkins</span>
                <span className="tag">GCP</span>
                <span className="tag">Linux</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                <span className="tag">Leadership</span>
                <span className="tag">Problem Solving</span>
                <span className="tag">Technical Writing</span>
                <span className="tag">Team Coordination</span>
                <span className="tag">Critical Thinking</span>
                <span className="tag">Adaptability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-title">Risk-Based MFA System</div>
              <p className="project-desc">
                Integrated authentication system combining password, TOTP, and geolocation analysis with AES-256 encryption and Shamir's Secret Sharing for secure credential management.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express.js</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">AES-256</span>
                <span className="tech-badge">JWT</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Nov 2025</p>
            </div>

            <div className="project-card">
              <div className="project-title">Access Sentinel: AI Anomaly Detection</div>
              <p className="project-desc">
                ML-based system detecting identity compromise and insider threats in IAM logs using Isolation Forest, Autoencoders, and Explainable AI (SHAP) for transparent risk visualization.
              </p>
              <div className="project-tech">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">PyTorch</span>
                <span className="tech-badge">SHAP</span>
                <span className="tech-badge">Streamlit</span>
                <span className="tech-badge">ML</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Feb 2026 • 3rd Place NITK</p>
            </div>

            <div className="project-card">
              <div className="project-title">SupplyChain·Sim: Attack Simulator</div>
              <p className="project-desc">
                Interactive React-based educational simulator demonstrating dependency-based attacks with real-time threat detection. Includes credential scanner and live terminal animations.
              </p>
              <div className="project-tech">
                <span className="tech-badge">React 18</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">File System API</span>
                <span className="tech-badge">Security</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Apr 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2>Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">June 2025 – August 2025</div>
                <div className="timeline-role">Cyber Security Analyst Intern</div>
                <div className="timeline-desc"><strong>EYEQ DOT NET PVT.LTD</strong></div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                  Performed VAPT on live systems, identified security gaps using BurpSuite and Kali Linux, demonstrated exploits (HTML Injection, Clickjacking), and documented professional security reports.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">July 2024 – Present</div>
                <div className="timeline-role">Team Lead, Employment Readiness Program</div>
                <div className="timeline-desc"><strong>NMAMIT</strong></div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                  Leading preparatory programs for 100+ students across two consecutive years, conducting mock interviews and technical feedback sessions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023 – 2026</div>
                <div className="timeline-role">Class Representative & Liaison</div>
                <div className="timeline-desc"><strong>NMAMIT (B.Tech CS & Cybersecurity)</strong></div>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>
                  Primary link between faculty and 60+ students, managing academic schedules and representing student interests in departmental meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Achievements & Recognitions</h2>
          <div className="projects-grid" style={{ marginTop: '2rem' }}>
            <div className="project-card" style={{ background: 'var(--bg-primary)' }}>
              <div className="project-title">🏆 Runner-up, CyberSiege National CTF</div>
              <p className="project-desc">
                2nd Place among 41 teams in 24-hour competition. Cryptography, Steganography, PWN, Web Exploitation, OSINT, and Digital Forensics.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Nov 2025</p>
            </div>

            <div className="project-card" style={{ background: 'var(--bg-primary)' }}>
              <div className="project-title">🥉 3rd Place, Security Bootcamp</div>
              <p className="project-desc">
                Recognized for Access Sentinel ML-based PoC detecting anomalous user behavior in real-time IAM logs (NITK/Saviynt).
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Feb 2026</p>
            </div>

            <div className="project-card" style={{ background: 'var(--bg-primary)' }}>
              <div className="project-title">🎯 Top 10 Finalist, CySecK CTF</div>
              <p className="project-desc">
                Ranked in top 10 out of 300+ participants in Capture The Flag competition organized by Centre of Excellence for Cybersecurity - Karnataka.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)' }}>Oct 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            Open to opportunities, collaborations, and security discussions
          </p>
          <div className="contact-email">
            <a href="mailto:iamamithesh@gmail.com">iamamithesh@gmail.com</a>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            +91 9481057182
          </p>
          <div className="social-links">
            <a href="https://github.com" className="social-link" title="GitHub">
              📱
            </a>
            <a href="https://linkedin.com" className="social-link" title="LinkedIn">
              💼
            </a>
            <a href="https://twitter.com" className="social-link" title="Twitter">
              𝕏
            </a>
            <a href="https://l1nk.dev/ugm3445" className="social-link" title="Link">
              🔗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        background: 'var(--bg-secondary)', 
        padding: '2rem', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)',
        color: 'var(--text-tertiary)'
      }}>
        <p>© 2026 Amithesh Sequiera. Designed with precision.</p>
      </footer>
    </>
  )
}

export default App
