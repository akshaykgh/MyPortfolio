import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import './../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'State University of New York at Binghamton',
      location: 'Binghamton, New York',
      period: 'May 2026',
      gpa: '3.71 / 4.00',
      description: 'Specializing in software engineering, cloud computing, and machine learning.'
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Mumbai',
      location: 'Mumbai, India',
      gpa: '3.66 / 4.00',
      period: 'May 2019'
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.period}`}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 380, damping: 26 } }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <p className="education-location">{edu.location}</p>
                <p className="education-period">{edu.period}</p>
                {edu.gpa && (
                  <div className="education-gpa">
                    <span className="gpa-label">GPA:</span>
                    <span className="gpa-value">{edu.gpa}</span>
                  </div>
                )}
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;



