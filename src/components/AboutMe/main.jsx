// src/components/mina/mina.jsx

import { useEffect } from 'react';

import Particle from './Particle/Particle.jsx';

import myImg2 from './Images/girl.webp';

import styles from './CSS/mina.module.css';

function TiltCard({ children, className = '' }) {
  return (
    <div className={`${styles.tiltCard} ${className}`}>
      {children}
    </div>
  );
}

function TimelineItem({
  date,
  title,
  text,
  image,
  imageAlt,
  align = 'left',
}) {
  return (
    <article
      className={`${styles.timelineItem} ${
        align === 'right' ? styles.timelineRight : ''
      }`}
      data-aos="fade-up"
    >
      <div className={styles.timelineDot} />

      <div className={styles.timelineCard}>
        <span className={styles.timelineDate}>{date}</span>

        {title && (
          <h3>{title}</h3>
        )}

        <p>{text}</p>

        {image && (
          <div className={styles.timelineImage}>
            <img
              src={image}
              alt={imageAlt}
            />
          </div>
        )}
      </div>
    </article>
  );
}

function Mina() {

  return (
    <div className={styles.aboutPage}>
      <Particle />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div
            className={styles.heroText}
          >
            <span className={styles.eyebrow}>
              ABOUT ME
            </span>

            <h1>
Curious by <span>nature.</span> Stubborn by design.
            </h1>

<p className={styles.intro}> Riko. Tutki. Korjaa. <br /> Ymmärrä. Rakenna uudestaan. </p>

            <div className={styles.binaryBox}>
              <span>BINARY ME</span>

          
  <div className={styles.binary}>
    <strong>01000011</strong>
    <strong>01001111</strong>
    <strong>01000100</strong>
    <strong>01000101</strong>
    <strong>01010010</strong>
    <strong>01001001</strong>
    <strong>01001110</strong>
    <strong>01001110</strong>
    <strong>01000001</strong>
  </div>
</div>
          </div>

          <div
            className={styles.heroImage}
          >
            <TiltCard>
              <img
                src={myImg2}
                alt="Nina"
              />
            </TiltCard>
          </div>
        </div>
      </section>



    </div>
  );
}

export default Mina;