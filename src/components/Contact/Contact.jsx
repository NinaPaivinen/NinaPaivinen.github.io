
// src/components/Contact/Contact.jsx
import { FaGithub } from 'react-icons/fa';

import styles from './CSS/contact.module.css';

function Contact() {

  return (
    <main className={styles.contactPage}>
      <section className={styles.hero}>
      <div className={styles.contentInner}>
          <span className={styles.sectionLabel}>
            FIND ME 
          </span>

          <h1>
            Let&apos;s connect
          </h1>

          <p>
Olen ääri introvertti, mutta jos löydät jonkun mielenkiintoisen keskustelun aiheen ota yhteyttä.
          </p>

<div className={styles.socialLinks}>
  <a
    href="https://github.com/coderinna"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
    className={styles.socialLink}
  >
    <span className={styles.socialIcon}>
      <FaGithub />
    </span>

    <span className={styles.socialText}>
      GitHub
    </span>

    <span className={styles.arrow}>
      ↗
    </span>
  </a>
</div>


          <p className={styles.signature}>
            Happy to hear you! ♡ or not...
          </p>
        </div>

        <div className={styles.waveContainer}>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
            aria-hidden="true"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              />
            </defs>

            <g className={styles.parallax}>
              <use
                href="#gentle-wave"
                x="48"
                y="0"
              />

              <use
                href="#gentle-wave"
                x="48"
                y="3"
              />

              <use
                href="#gentle-wave"
                x="48"
                y="5"
              />

              <use
                href="#gentle-wave"
                x="48"
                y="7"
              />
            </g>
          </svg>
        </div>
      </section>

    </main>
  );
}

export default Contact;