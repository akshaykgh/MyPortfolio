import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaBrain } from 'react-icons/fa';
import './../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Autism Prediction using Machine Learning',
      description: 'Developed a high-accuracy ASD prediction model using Decision Trees, Random Forest, and XGBoost with advanced preprocessing and hyperparameter tuning.',
      icon: <FaBrain />,
      technologies: ['Python', 'Machine Learning', 'XGBoost', 'Random Forest', 'Decision Trees'],
      gradient: 'gradient-1'
    },
    {
      title: 'Smart India Hackathon — Government of Maharashtra',
      description: 'Led a team to develop an Android app for atrocity case management, enabling FIR registration, payment distribution, and status notifications. Collaborated with government departments to design an intuitive interface.',
      icon: <FaMobile />,
      technologies: ['Android', 'Java', 'Firebase', 'Government Integration'],
      gradient: 'gradient-2'
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
              key={index}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



