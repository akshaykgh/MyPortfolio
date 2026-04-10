import React from 'react';
import { motion } from 'framer-motion';
import './../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm a passionate Computer Science graduate student at SUNY Binghamton with a strong foundation
              in software engineering and a keen interest in full-stack development, cloud computing, and
              machine learning.
            </p>
            <p>
              With over five years at Oracle Financial Services Software, I've delivered Java Spring Boot
              microservices, React and WPF (C#) front ends, Kafka-driven workflows, and AWS Kubernetes deployments
              for institutional asset-management products. My stack also includes Node.js, TypeScript, Next.js, and
              full-stack shipping on AWS.
            </p>
            <p>
              Alongside my studies, I'm a Software Engineer Intern at Lenguas Club LLC in New York, building a
              teacher scheduling platform with Node.js, Next.js, and cloud-native deployment on AWS. Previously,
              I was a Computer Programmer Intern at Global Health Impact in Binghamton, shipping Flask APIs, React
              UIs, and cloud deployments for global health analytics.
            </p>
          </motion.div>
          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="stat-card"
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            >
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Modules modernized</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            >
              <div className="stat-number">95%</div>
              <div className="stat-label">Scheduling workflow automation</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
            >
              <div className="stat-number">3.71</div>
              <div className="stat-label">GPA</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;



