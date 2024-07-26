import React from 'react'
import styles from "./Footer.module.css"
import "../../index.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerText}>
            <p>Copyright &copy; 2024 by Piero Longino | All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer