import React from 'react'
import styles from "./Contact.module.css"
import "../../index.css"


export const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
        <h2 className={styles.heading}>Contact Me!</h2>
        <form action="https://formspree.io/f/xgvwaeja" method="POST">
            <div className={styles.inputBox}>
                <div className={styles.inputField}>
                    <input type="text" name='fullName' placeholder='Full Name' required />
                    <span className={styles.focus}></span>
                </div>
                <div className={styles.inputField}>
                    <input type="text" name='email' placeholder='Email Address' required />
                    <span className={styles.focus}></span>
                </div>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputField}>
                    <input type="number" name='mobileNumber' placeholder='Mobile Number' required />
                    <span className={styles.focus}></span>
                </div>
                <div className={styles.inputField}>
                    <input type="text" name='subject' placeholder='Email Subject' required />
                    <span className={styles.focus}></span>
                </div>
            </div>

            <div className={styles.textareaField}>
                <textarea name="message" id="" cols={30} rows={10} placeholder='Your Message' required></textarea>
                <span className={styles.focus}></span>
            </div>

            <div className={`${styles.btnBox} ${styles.btns}`}>
                <button type='submit' className={styles.btn}>Submit</button>
            </div>
        </form>
        

    </section>
  )
}

