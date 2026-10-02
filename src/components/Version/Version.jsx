
// src/components/Version/Version.jsx
import { useState } from 'react';

import styles from './version.module.css';

import version1 from '../../assets/Projects/version1.png';
import version2 from '../../assets/Projects/version1_a.png';
import version3 from '../../assets/Projects/version1_b.png';
import version4 from '../../assets/Projects/version1_c.png';
import version5 from '../../assets/Projects/version1_d.png';

const versions = [
  {
    image: version1,
    alt: 'Original Coderinna portfolio homepage from 2022',
  },
  {
    image: version4,
    alt: 'Original Coderinna portfolio screenshot from 2022',
  },
  {
    image: version5,
    alt: 'Original Coderinna portfolio screenshot from 2022',
  },
  {
    image: version2,
    alt: 'Original Coderinna portfolio screenshot from 2022',
  },
  {
    image: version3,
    alt: 'Original Coderinna portfolio screenshot from 2022',
  },
];


function Version() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? versions.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === versions.length - 1 ? 0 : current + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.version}>
      <div className={styles.versionInner}>
        <span className={styles.eyebrow}>ARCHIVE</span>

        <h2>
          Where it <span>started.</span>
        </h2>

        <p className={styles.description}>
          Portfolioni ensimmäinen versio vuodelta 2022.
          Rakennettu Reactilla Create React App -pohjalle.
        </p>

        <div className={styles.archiveCard}>
          <div className={styles.archiveHeader}>
            <span className={styles.statusDot} />

            <span>VERSION 1.0 / 2022</span>

            <span className={styles.archiveTech}>
              CRA · REACT
            </span>

            <span className={styles.archiveLabel}>
              ARCHIVED
            </span>
          </div>

          <div className={styles.slider}>
            <button
              className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
              type="button"
              onClick={previousSlide}
              aria-label="Previous image"
            >
              ←
            </button>

            <div className={styles.imageWrapper}>
              <img
                src={versions[currentIndex].image}
                alt={versions[currentIndex].alt}
              />

              <span className={styles.imageCounter}>
                {String(currentIndex + 1).padStart(2, '0')} /{' '}
                {String(versions.length).padStart(2, '0')}
              </span>
            </div>

            <button
              className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
            >
              →
            </button>
          </div>

          <div className={styles.sliderDots}>
            {versions.map((version, index) => (
              <button
                key={version.image}
                type="button"
                className={`${styles.sliderDot} ${
                  index === currentIndex ? styles.sliderDotActive : ''
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Version;