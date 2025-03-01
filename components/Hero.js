// components/Hero.js
import React from 'react';
import styles from '../styles/Home.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to Our Website!</h1>
        <p className={styles.heroDescription}>
        Welcome to our blog. We always believe in providing quality content on our user-friendly website, which is also easier to read.
        </p>
        <a href="#" className={styles.ctaButton}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
