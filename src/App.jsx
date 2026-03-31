import { useMemo, useState } from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFastForward,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";

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

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A modern personal portfolio with project highlights, responsive sections, and smooth section navigation.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    demo: "https://example.com/portfolio-demo",
    github: "https://github.com/saffronaayush/Portfolio",
  },
  {
    name: "BeyondChat UI",
    description:
      "A clean and interactive chat interface focused on usability and message flow for real-time experiences.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    demo: "https://example.com/beyondchat-demo",
    github: "https://github.com/saffronaayush/BeyondChat-UI",
  },
  {
    name: "YouTube Clone",
    description:
      "A YouTube-inspired app with video browsing experience, reusable components, and responsive layout.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    demo: "https://example.com/youtube-clone-demo",
    github: "https://github.com/saffronaayush/Youtube",
  },
  {
    name: "Chat App Server",
    description:
      "Backend service for chat features with structured APIs and scalable server-side organization.",
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?auto=format&fit=crop&w=900&q=80",
    demo: "https://example.com/chat-server-demo",
    github: "https://github.com/saffronaayush/ChatAppServer",
  },
  {
    name: "Personal VCS Project",
    description:
      "A learning-focused custom VCS implementation exploring snapshots, commits, and history operations.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    demo: "https://example.com/vcs-demo",
    github: "https://github.com/saffronaayush/Groot---Our-personal-VCS",
  },
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
  const visibleProjects = useMemo(
    () => (showAllProjects ? projects : projects.slice(0, 3)),
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

      <nav className="top-nav fixed">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="home" className="hero section hero-fullscreen">
        <div className="hero-orb" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Welcome to my space</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-tagline">
            Crafting full-stack products with clean UI and real impact.
          </p>

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
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
          <div className="hero-actions">
            <a
              className="hero-resume"
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
            >
              <span>View Resume</span>
              <FaExternalLinkAlt />
            </a>
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
            <article key={project.name} className="project-card">
              <img src={project.image} alt={project.name} />
              <div className="project-body">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length > 3 && (
          <button
            type="button"
            className="expand-btn"
            onClick={() => setShowAllProjects((prev) => !prev)}
          >
            <FaFastForward />
            {showAllProjects
              ? "Show less projects"
              : `Show more projects (${projects.length - 3} more)`}
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
            <a href={`mailto:${profile.email}`} className="contact-btn">
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

      <a className="floating-email" href={`mailto:${profile.email}`}>
        <FaEnvelope />
        <span>{profile.email}</span>
      </a>
    </div>
  );
}

export default App;
