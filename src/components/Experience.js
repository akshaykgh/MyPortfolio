import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Lenguas Club LLC',
      location: 'New York, USA',
      period: 'Sep 2025 – Present',
      technologies: [
        'Node.js',
        'Express.js',
        'MySQL',
        'Sequelize',
        'TypeScript',
        'React',
        'Next.js',
        'Docker',
        'AWS',
        'CloudWatch'
      ],
      achievements: [
        'Architected a teacher scheduling platform with Node.js, Express.js, MySQL (Sequelize ORM), TypeScript, and React (Next.js), supporting 150+ users and 40+ instructors—replacing Excel workflows with 95% automation',
        'Optimized scheduling for 400+ weekly schedules with sub-second latency, including 26 data validations per run',
        'Deployed with Docker on AWS and monitored via CloudWatch to maintain 99.5% service availability'
      ]
    },
    {
      title: 'Computer Programmer Intern',
      company: 'Global Health Impact',
      location: 'Binghamton, New York',
      period: 'Feb 2025 – Aug 2025',
      technologies: ['React', 'Python', 'Flask', 'SQL', 'Gunicorn', 'Nginx'],
      achievements: [
        'Developed APIs with Python Flask for data integration, reducing data retrieval time by 40%',
        'Built React user interfaces that improved engagement with forecasting and analytics workflows by 30%',
        'Migrated and deployed the forecasting tool and main website to Jetstream2 Cloud using Gunicorn and Nginx'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Oracle Financial Services Software',
      location: 'Mumbai, India',
      period: 'Oct 2022 – Aug 2024',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'WPF',
        'C#',
        'Apache Kafka',
        'SQL',
        'AWS',
        'Kubernetes'
      ],
      achievements: [
        'Led development of Java Spring Boot microservices for ETF workflows (~$4.5B AUM in scope) and user-facing React dashboards, improving approval efficiency by 75%',
        'Designed high-volume distributed batch processing with SQL-optimized pipelines, reducing trade execution time by 80%',
        'Built event-driven architecture with Apache Kafka, integrating services with React dashboards and WPF (C#) UIs, cutting manual monitoring by 40%',
        'Ran services on AWS Kubernetes, modernizing 50+ modules and increasing development velocity by 30%'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Oracle Financial Services Software',
      location: 'Mumbai, India',
      period: 'Aug 2019 – Sep 2022',
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'WPF',
        'C#',
        'AWS',
        'Oracle DB',
        'JUnit',
        'Mockito',
        'CI/CD'
      ],
      achievements: [
        'Engineered Java Spring Boot microservices on AWS in a 25-member Agile team; owned the Portfolio module with React UI and WPF (C#) components',
        'Mentored five engineers and used CI/CD for Oracle DB–backed microservices, reducing cycle time by 30%',
        'Implemented automated testing with JUnit and Mockito, reducing production issues and improving MTTR by 35%'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}-${exp.period}`}
              className="experience-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 28 } }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-title-section">
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="experience-period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
              </div>
              <div className="experience-technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
