import { useMemo, useState } from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFastForward,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import projectsData from "./projects_data";

const resumeLink =
  "https://drive.google.com/file/d/1n5s1qb3frMaVwoNntH5qTvt22Wp7FF_C/view?usp=drive_link";

const profile = {
  name: "Aayush Soni",
  title: "Full-Stack Developer",
  photo: "https://github.com/saffronaayush.png",
  github: "https://github.com/saffronaayush",
  linkedin: "https://www.linkedin.com/in/aayush-soni-dev",
  email: "soniaayush5562@gmail.com",
  phone: "+91 98765 43210",
};

const aboutContent = [
  "Hi Everyone, I’m Aayush Soni from Rajasthan, India. I’m currently pursuing a B.Tech in Artificial Intelligence & Data Science at IIIT Sri City.",
  "I’m fluent in core technologies like C++, JavaScript, and Python.",
  "I enjoy building things for the web — whether it’s frontend UIs, backend systems, or exploring emerging tech like blockchain and AI/ML.",
  "Whenever possible, I apply my passion for developing products using Node.js and modern JavaScript libraries and frameworks like React.js and Next.js.",
  "I’ve solved 500+ DSA problems across multiple platforms, which has shaped my problem-solving mindset and helped me write efficient, clean code.",
];

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </div>
  );
}

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const mailtoLink = `mailto:${profile.email}?subject=Portfolio%20Inquiry`;
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

  const handleEmailClick = (event) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      event.preventDefault();
      window.open(gmailComposeLink, "_blank", "noopener,noreferrer");
    }
  };

  const visibleProjects = useMemo(
    () => (showAllProjects ? projectsData : projectsData.slice(0, 3)),
    [showAllProjects],
  );

  return (
    <div className="page">
      <a
        className="floating-resume"
        href={resumeLink}
        target="_blank"
        rel="noreferrer"
      >
        <FaExternalLinkAlt /> Resume
      </a>

      <nav className="top-nav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="home" className="hero section hero-fullscreen">
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-main">
            <p className="eyebrow">Welcome to my space</p>
            <h1 className="hero-name">{profile.name}</h1>
            <h2>{profile.title}</h2>
            <p className="hero-tagline">
              Crafting full-stack products with clean UI and real impact.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href={mailtoLink} aria-label="Email" onClick={handleEmailClick}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <SectionHeader
          title="About Me"
          subtitle="A quick intro to who I am and how I work."
        />
        <div className="about-layout">
          <div className="hero-photo-wrap">
            <img
              src={profile.photo}
              alt={`${profile.name} profile`}
              className="hero-photo"
            />
          </div>
          <div className="about-text">
            {aboutContent.map((paragraph) => (
              <p key={paragraph} className="about section-lead">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeader
          title="Projects"
          subtitle="Top projects first, with option to view all."
        />
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article key={project.title} className="project-card">
              <img src={project.imgPath} alt={project.title} />
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                  <a href={project.ghLink} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projectsData.length > 3 && (
          <button
            type="button"
            className="expand-btn"
            onClick={() => setShowAllProjects((prev) => !prev)}
          >
            <FaFastForward />
            {showAllProjects
              ? "Show less projects"
              : `Show more projects (${projectsData.length - 3} more)`}
          </button>
        )}
      </section>

      <section id="contact" className="section contact">
        <div className="contact-inner">
          <SectionHeader
            title="Contact"
            subtitle="Let's build something together."
          />
          <div className="contact-actions">
            <a href={mailtoLink} className="contact-btn" onClick={handleEmailClick}>
              <FaEnvelope /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="contact-btn"
            >
              <FaPhoneAlt /> {profile.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
