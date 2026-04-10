import React, { useState, useEffect, useCallback } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion, useReducedMotion } from 'framer-motion';
import './../styles/Hero.css';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const onPointerMove = useCallback((e) => {
    if (reduceMotion) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setPointer({ x, y });
  }, [reduceMotion]);

  useEffect(() => {
    window.addEventListener('mousemove', onPointerMove);
    return () => window.removeEventListener('mousemove', onPointerMove);
  }, [onPointerMove]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const orbShift = (mx, my, strength) =>
    reduceMotion
      ? {}
      : { x: mx * strength * pointer.x, y: my * strength * pointer.y };

  return (
    <section id="home" className="hero">
      <div className="hero-grid" aria-hidden />
      <div className="hero-background">
        <motion.div
          className="gradient-orb orb-1"
          animate={orbShift(28, 22, 1)}
          transition={{ type: 'spring', stiffness: 26, damping: 18, mass: 0.6 }}
        />
        <motion.div
          className="gradient-orb orb-2"
          animate={orbShift(-22, 28, 1)}
          transition={{ type: 'spring', stiffness: 26, damping: 18, mass: 0.6 }}
        />
        <motion.div
          className="gradient-orb orb-3"
          animate={orbShift(18, -14, 0.85)}
          transition={{ type: 'spring', stiffness: 26, damping: 18, mass: 0.6 }}
        />
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={reduceMotion ? {} : { scale: 1.03 }}
            whileTap={reduceMotion ? {} : { scale: 0.98 }}
          >
            <span>👋  Welcome</span>
          </motion.div>
          <motion.h1 className="hero-name" variants={itemVariants}>
            Akshaykumar
            <span className="gradient-text"> Gangadhar Hanmandla</span>
          </motion.h1>
          <motion.p className="hero-title" variants={itemVariants}>
            Master of Science in Computer Science
          </motion.p>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Senior Software Engineer | Full-Stack Developer | Cloud Enthusiast
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            I enjoy building applications and AI-driven solutions that solve real problems with software that
            is clear, dependable, and straightforward to grow over time.
          </motion.p>
          <motion.div className="hero-contact" variants={itemVariants}>
            <a href="tel:607-343-8852" className="contact-item">
              <FaPhone /> 607-343-8852
            </a>
            <a href="mailto:ahanmandla@binghamton.edu" className="contact-item">
              <FaEnvelope /> ahanmandla@binghamton.edu
            </a>
          </motion.div>
          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://linkedin.com/in/akshaykgh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/akshaykgh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -6, scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="cta-button"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="cta-button secondary"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="mouse"
          animate={reduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;



