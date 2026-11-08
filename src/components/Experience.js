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
      period: 'Sep 2025 – Aug 2026',
      technologies: [
        'React', 'Next.js', 'GraphQL', 'Java 21', 'Spring Boot',
        'TypeScript', 'MySQL', 'Redis', 'Docker', 'AWS',
        'Python', 'LangChain', 'OpenAI API', 'Pinecone'
      ],
      achievements: [
        'Built a responsive React, Next.js, and GraphQL scheduling platform and teacher portal for 100+ teachers and 20+ admins, replacing a manual Excel workflow to achieve 95% operational automation and real-time coordination',
        'Developed the application using Java 21, Spring Boot, TypeScript, MySQL, Redis, Docker and AWS, developing a validation engine that processes scheduling requests at sub-second latency against 26 conflict checks to maintain 400+ weekly schedules',
        'Built a LLM-powered RAG Operations Copilot using Python, Next.js, LangChain, OpenAI API, and Pinecone to index teacher handbooks, scheduling policies, and training guides, enabling administrators and instructors to answer policy and workflow questions through natural language while reducing internal support requests by 55%'
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
        'Java 17', 'Spring Boot', 'Spring Cloud', 'Spring Data JPA',
        'Microservices', 'React', 'SQL', 'Python', 'MongoDB',
        'Apache Kafka', 'AWS', 'Kubernetes', 'Jenkins', 'CI/CD'
      ],
      achievements: [
        'Automated legacy ETF approval workflows using Java 17, Spring Boot, Spring Cloud, Spring Data JPA, Microservices, and React, eliminating tedious manual validation processes to deliver $160K+ in annual savings and reduce turnaround times by 75%',
        'Designed high-volume batch processing pipelines handling millions of daily records from multiple transaction streams, optimizing complex SQL queries to slash end-of-day trade processing time from 45 minutes to 5 minutes',
        'Engineered an event-driven architecture using Python, MongoDB, and Apache Kafka, developing decoupled producer-consumer microservices for real-time trade anomaly detection and deploying automated alerting streams that cut manual monitoring by 40%',
        'Orchestrated application containers on AWS Kubernetes while building automated Jenkins CI/CD pipelines, modernizing 50+ modules and slashing software release cycles from 20 to 4 hours'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Oracle Financial Services Software',
      location: 'Mumbai, India',
      period: 'Aug 2019 – Sep 2022',
      technologies: [
        'AWS', 'Java 11', 'Spring Boot', 'TypeScript', 'Hibernate',
        'React', 'ASP.NET', 'C#', 'REST APIs', 'Oracle DB', 'JUnit', 'Mockito'
      ],
      achievements: [
        'Built AWS-based Portfolio microservices with Java 11, Spring Boot, TypeScript, and Hibernate, enhanced React and ASP.NET C# applications, designed REST APIs, and implemented JUnit and Mockito tests to improve reliability and speed feature delivery',
        'Developed high-throughput REST APIs and optimized Oracle DB services to seamlessly process 10,000+ daily transactions, while leading code reviews for a 5-engineer team to cut deployment defects by 35%'
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
