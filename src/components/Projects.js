import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaBrain, FaGithub, FaStickyNote, FaReact } from 'react-icons/fa';
import './../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Autism Prediction using Machine Learning',
      description: 'Developed a high-accuracy ASD prediction model using Decision Trees, Random Forest, and XGBoost with advanced preprocessing and hyperparameter tuning.',
      icon: <FaBrain />,
      technologies: ['Python', 'Machine Learning', 'XGBoost', 'Random Forest', 'Decision Trees'],
      gradient: 'gradient-1',
      githubUrl: 'https://github.com/akshaykgh/AutismPredictionUsingML'
    },
    {
      title: 'Smart India Hackathon — Government of Maharashtra',
      description: 'Led a team to develop an Android app for atrocity case management, enabling FIR registration, payment distribution, and status notifications. Collaborated with government departments to design an intuitive interface.',
      icon: <FaMobile />,
      technologies: ['Android', 'Java', 'Firebase', 'Government Integration'],
      gradient: 'gradient-2'
    },
    {
      title: 'Smart Notes & Reminder Manager',
      description:
        "Full-stack notes app with session-based authentication, tagging, global search, and reminders with pending or completed states. Parses natural phrases for smart due-date suggestions, includes a dashboard for today's tasks and recent notes, and ships with Docker Compose for local PostgreSQL, PHP API, and React + Vite.",
      icon: <FaStickyNote />,
      technologies: ['PHP', 'React', 'Vite', 'PostgreSQL', 'Docker'],
      gradient: 'gradient-3',
      githubUrl: 'https://github.com/akshaykgh/SmartNoteAndReminder'
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'This site: a responsive React portfolio with Framer Motion, section-based navigation with active highlighting, and a cohesive dark theme using CSS custom properties. Showcases experience, education, projects, skills, and contact.',
      icon: <FaReact />,
      technologies: ['React', 'Framer Motion', 'React Icons', 'CSS3'],
      gradient: 'gradient-1',
      githubUrl: 'https://github.com/akshaykgh/MyPortfolio'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, transition: { type: 'spring', stiffness: 420, damping: 28 } }}
            >
              <div className={`project-icon ${project.gradient}`}>
                {project.icon}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech-tag">{tech}</span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub aria-hidden />
                  View on GitHub
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



