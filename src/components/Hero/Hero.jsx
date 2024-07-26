import React from 'react'
import { getImageUrl } from '../../utils'
import "../../index.css"
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.home} id='home'>
        <div className={styles.homeContent}>
            <h1>Hi, I'm <span>Piero Longino</span></h1>
            <div className={styles.textAnimate}>
                <h3>Frontend Developer</h3>
            </div>
            <p>I’m a new frontend developer with a passion for creating engaging and intuitive web experiences. I focus on blending modern design with cutting-edge technology to deliver exceptional results. Eager to learn and grow, I’m excited to tackle new challenges and bring innovative ideas to life.</p>
            
            <div className={styles.btnBox}>
                <a href="#" className={styles.btn}>Hire Me</a>
                <a href="mailto:pierolongino.pl@gmail.com" className={styles.btn}>Let's Talk</a>
            </div>
        </div>
        <img 
        src={getImageUrl("hero/heroImage.png")}
        alt='Hero image of me' 
        className={styles.heroImg}
        />
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}
