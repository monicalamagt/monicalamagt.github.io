import { useState, useEffect, useRef } from 'react';
import './App.css';
// import { FiMail, FiLinkedin, FiGithub, FiDownload } from 'react-icons/fi';
import { useIntersectionObserver } from './useIntersectionObserver';

const App: React.FC = () => {
  const [showHeader, setShowHeader] = useState(false);
  const nameSectionRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLHeadingElement>(null);
  // const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowHeader(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleExperienceVisibility = () => {
      if (experienceRef.current) {
        // const rect = experienceRef.current.getBoundingClientRect();
       // setIsExperienceVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleExperienceVisibility);
    return () => window.removeEventListener('scroll', handleExperienceVisibility);
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar Menu */}
      <nav className="sidebar-menu">
        <div className="menu-logo">ML</div>
        <ul>
          <li><a href="#name-page" className="menu-dot" aria-label="Name Section"></a></li>
          <li><a href="#about-page" className="menu-dot" aria-label="About Section"></a></li>
          <li><a href="#experience-page" className="menu-dot" aria-label="Professional Experience Section"></a></li>
          <li><a href="#contact-page" className="menu-dot" aria-label="Contact Section"></a></li>
        </ul>
      </nav>
      {/* Main Content */}
      <div className="dashboard-main">
        {/* Header Section (initially hidden, appears on scroll) */}
        <header className={`dashboard-header ${showHeader ? 'visible' : ''}`}>
          <h1>ML</h1>
        </header>
        {/* Fullscreen Name Section (Page 1) */}
        <section className="name-fullscreen-section" id="name-page" ref={nameSectionRef}>
          <div className="about-me-large-name">
            <p className="greeting-text">hello, i'm</p>
            <h1>
              <div className="name-line">
                <span>M</span>
                <span>O</span>
                <span>N</span>
                <span>I</span>
                <span>C</span>
                <span>A</span>
              </div>
              <div className="name-line">
                <span>L</span>
                <span>A</span>
                <span>M</span>
                <span>A</span>
              </div>
            </h1>
          </div>
        </section>

        {/* About Me Section (Page 2) */}
        <section className="about-me-section" id="about-page">
          <div className="card about-me-card">
            <h2>About Me</h2>
            <div className="about-me-content">
              <div className="about-me-text">
                <p>
                  I'm Monica Lama, an engineering student at the University of Pennsylvania pursing a Bachelor of Science in Engineering in Artificial Intelligence with a minor in Mathematics. Born in Guatemala and raised in Miami, I bring a multicultural perspective to rigorous technical work and interdisciplinary research.
                </p>
                <p>
                  My interests lie at the intersection of theoretical foundations and real-world applications of AI — from algorithmic design to large-scale model deployment. I have experience across AI, quantitative finance, and machine learning research, including work with large language models, multi-agent systems, and vision-language architectures. I'm particularly driven by the potential of these technologies in predictive modeling, optimization, and financial systems.
                </p>
                <p>
                  I'm motivated by complex challenges that demand both technical depth and creative thinking, and I aim to contribute to the next generation of advancements in artificial intelligence.
                </p>
              </div>
              <div className="about-me-image">
                <img src="/profile.jpg" alt="Monica Lama" />
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience Section (Page 3) */}
        <section className="professional-experience-section" id="experience-page">
          <h2 ref={experienceRef}>Professional Experience</h2>
          <div className="timeline-container">
            <div className="timeline-line"></div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>Research Engineer – Multimodal AI Systems</h3>
                  <div className="company">University of Pennsylvania</div>
                </div>
                <div className="date-group">
                  <span className="date">May 2025 - Present</span>
                  <div className="location">Philadelphia, PA</div>
                </div>
              </div>
              <p>Advisor: Professor Chris Callison-Burch</p>
              <p>• Contributing to the development of a toolkit that collects dense image captions via spoken audio, integrating LLMs for transcription and refinement</p>
              <p>• Extending work from the MOLMO paper to support applications like scientific figure interpretation, culturally specific image annotation, and 3D object description (Objaverse)</p>
              <p>• Collaborating on the design and deployment of a web-based UI for voice-based annotation, combining timestamped speech with visual data</p>
              <p>• Supporting backend engineering, LLM API integration (e.g., OpenAI), and vision-language model enhancement through large-scale data collection and processing</p>
              <p>Technologies: Python, LLM APIs, cloud deployment, UI/UX design, vision-language models, image segmentation (e.g., Segment Anything)</p>
            </div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>AI/ML R&D Intern</h3>
                  <div className="company">Crypt0nest.io</div>
                </div>
                <div className="date-group">
                  <span className="date">June 2025 - Present</span>
                  <div className="location">Remote</div>
                </div>
              </div>
              <p>• Developed LSTM and transformer models on Google Cloud Platform, integrating on-chain, sentiment, and knowledge-graph data; reduced MAPE by 15% and improved F1 score by 12%</p>
              <p>• Streamlined CI/CD pipelines using GitHub Actions and Docker, reducing deployment cycles from 2 hours to under 30 minutes</p>
              <p>• Wrote reproducible research documentation and conducted code reviews, enabling five contributors to onboard within one week</p>
              <p>• Led competitor and user-needs analysis to guide model roadmap and prioritize MVP features</p>
            </div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>Software Developer Intern</h3>
                  <div className="company">Superintendencia de Bancos</div>
                </div>
                <div className="date-group">
                  <span className="date">July 2024 - August 2024</span>
                  <div className="location">Santo Domingo, DR</div>
                </div>
              </div>
              <p>• Developed predictive economic models for currency exchange rates using Python, Oracle SQL Developer, and Excel</p>
              <p>• Enhanced model reliability between Dominican Peso and USD, reducing consumer risk factors</p>
              <p>• Implemented machine learning linear regression models to predict macroeconomic indicators for consumer risk-mediation</p>
              <p>• Gained experience working in a data-driven environment with mentorship from financial professionals</p>
            </div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>Student Intern</h3>
                  <div className="company">Accenture Student Leadership Program (SLP)</div>
                </div>
                <div className="date-group">
                  <span className="date">February 2025 - May 2025</span>
                  <div className="location">Remote</div>
                </div>
              </div>
              <p>• Chosen from a highly competitive pool for Accenture's four-month SLP, participating in intensive workshops, business simulations, and case studies</p>
              <p>• Paired with a mentor who provided hands-on insights into technology and finance consulting, along with innovative business strategies</p>
              <p>• Built a robust network through virtual coffee chats, learning sessions, and "fire-side" chats with industry leaders</p>
            </div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>Tutor</h3>
                  <div className="company">University of Pennsylvania's Weingarten Center</div>
                </div>
                <div className="date-group">
                  <span className="date">May 2025 - Present</span>
                  <div className="location">Philadelphia, PA</div>
                </div>
              </div>
              <p>• Tutor for PHYS0150 (Physics I), MATH1410 (Multivariable Calculus), ESE2100 (Introduction to Dynamical Systems)</p>
            </div>
            <div className="experience-card">
              <div className="title-row">
                <div className="title-group">
                  <h3>Teacher's Assistant</h3>
                  <div className="company">Multivariable Calculus (MATH 1410)</div>
                </div>
                <div className="date-group">
                  <span className="date">June 2024 - July 2024</span>
                  <div className="location">Philadelphia, PA</div>
                </div>
              </div>
              <p>• Facilitated recitation sessions and provided academic support to students as part of a leadership team</p>
            </div>
          </div>
        </section>

        {/* Contact Section (Page 4) */}
        <section className="contact-section" id="contact-page">
          <div className="about-me-card">
            <h2>Contact</h2>
            <div className="about-me-content">
              <div className="about-me-text">
                <div className="contact-images">
                  <a href="mailto:mlama@seas.upenn.edu" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src="/email-icon.png" alt="Email" className="contact-icon" />
                    <span>mlama@seas.upenn.edu</span>
                  </a>
                  <a href="https://www.linkedin.com/in/monica-lama-gonzalez-teja-782097260" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src="/linkedin-icon.png" alt="LinkedIn" className="contact-icon" />
                    <span>www.linkedin.com/in/monica-lama-gonzalez-teja-782097260</span>
                  </a>
                  <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <img src="/github-icon.png" alt="GitHub" className="contact-icon" />
                    <span>github.com/yourprofile</span>
                  </a>
                  <a href="/resume.pdf" download className="contact-item">
                    <img src="/resume-icon.png" alt="Resume" className="contact-icon" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Dashboard Grid (Page 6 onwards) - Remaining items */}
        <div className="dashboard-grid">
        </div>
      </div>
    </div>
  );
};

export default App;
