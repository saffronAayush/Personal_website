import { useMemo, useState } from "react";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFastForward,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaPhoneAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const resumeLink =
  "https://drive.google.com/file/d/1n5s1qb3frMaVwoNntH5qTvt22Wp7FF_C/view?usp=drive_link";

const profile = {
  name: "Aayush Soni",
  title: "Full-Stack MERN Developer",
  photo: "https://github.com/saffronaayush.png",
  about:
    "I build performant, user-friendly web apps with a product-focused mindset. I enjoy solving real problems, building smooth UIs, and shipping full-stack features end to end.",
  github: "https://github.com/saffronaayush",
  linkedin: "https://www.linkedin.com/in/aayush-soni-dev",
  email: "soniaayush5562@gmail.com",
  phone: "+91 98765 43210",
};

const techStack = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "Express.js", icon: SiExpress },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "C++", icon: TbBrandCpp },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Python", icon: FaPython },
  { name: "FastAPI", icon: SiFastapi },
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

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = useMemo(
    () => (showAllProjects ? projects : projects.slice(0, 3)),
    [showAllProjects]
  );

  return (
    <div className="page">
      <a className="floating-resume" href={resumeLink} target="_blank" rel="noreferrer">
        Resume
      </a>

      <header className="hero section">
        <div className="hero-photo-wrap">
          <img src={profile.photo} alt={`${profile.name} profile`} className="hero-photo" />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="about">{profile.about}</p>

          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
      </header>

      <section className="section">
        <h3>Skillset & Tech Stack</h3>
        <p className="section-lead">
          Full MERN stack + modern backend and problem-solving languages.
        </p>
        <div className="skills-grid">
          {techStack.map(({ name, icon: Icon }) => (
            <div key={name} className="skill-card">
              <Icon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>Projects</h3>
        <p className="section-lead">Top projects first, with option to view all.</p>
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

      <section className="section contact">
        <h3>Contact</h3>
        <p>Let&apos;s build something together.</p>
        <div className="contact-actions">
          <a href={`mailto:${profile.email}`} className="contact-btn">
            <FaEnvelope /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} className="contact-btn">
            <FaPhoneAlt /> {profile.phone}
          </a>
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
