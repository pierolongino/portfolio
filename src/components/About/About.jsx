import React from "react";
import "../../index.css"
import styles from './About.module.css'
import { getImageUrl } from '../../utils'


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Website Copy, Design and Development</h3>
              <p>
              I create websites with engaging copy, elegant design, and solid development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Brand Strategy & Visual Identity</h3>
              <p>
              I develop brand strategies and visual identities, including logos and colors.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Graphic & Social Media Design</h3>
              <p>
              I design graphics and social media content that boost engagement.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>

    </section>
  );
};
