import React from 'react';
import { motion } from 'framer-motion';
import './../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Javascript', 'C', 'C++', 'C#', 'Rust', 'Kotlin', 'Swift', 'Go', 'Scala', 'TypeScript', 'R', 'Perl', 'Haskell', 'Groovy', 'Julia', 'Dart', 'PHP', 'Java', 'Python']
    },
    {
      title: 'Technologies',
      skills: ['React.js', 'Angular', 'Vue.js', 'Django', 'Flask', 'Ruby on Rails', 'Spring Boot', 'Express.js', 'TensorFlow', 'PyTorch', 'jQuery', 'Bootstrap', 'Laravel', 'ASP.NET', 'Node.js', 'Electron', 'Android SDK', 'iOS SDK']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['Google Cloud Platform (GCP)', 'Amazon Web Services (AWS)', 'Azure', 'Kubernetes', 'CI/CD', 'Docker', 'Jenkins', 'Nginx', 'Gunicorn']
    },
    {
      title: 'Concepts',
      skills: ['Compiler Design', 'Operating Systems', 'Virtual Memory', 'Cache Memory', 'Encryption/Decryption', 'Artificial Intelligence', 'Machine Learning', 'Neural Networks', 'API Development', 'Database Normalization', 'Agile Methodology', 'Cloud Computing']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { type: 'spring', stiffness: 400, damping: 30 } }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-list">
            <span className="cert-item">Amazon Web Services Certified Developer Associate</span>
            <span className="cert-item">Oracle Cloud Infrastructure Foundations 2021</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;



