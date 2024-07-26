import React from 'react'
import styles from "./Contact.module.css"
import "../../index.css"


export const Contact = () => {
  return (
    <section className={styles.contact} id='contact'>
        <h2 className={styles.heading}>Contact <span>Me!</span></h2>
        <form action="#">
            <div className={styles.inputBox}>
                <div className={styles.inputField}>
                    <input type="text" placeholder='Full Name' required />
                    <span className={styles.focus}></span>
                </div>
                <div className={styles.inputField}>
                    <input type="text" placeholder='Email Address' required />
                    <span className={styles.focus}></span>
                </div>
            </div>
            <div className={styles.inputBox}>
                <div className={styles.inputField}>
                    <input type="number" placeholder='Mobile Number' required />
                    <span className={styles.focus}></span>
                </div>
                <div className={styles.inputField}>
                    <input type="text" placeholder='Email Subject' required />
                    <span className={styles.focus}></span>
                </div>
            </div>

            <div className={styles.textareaField}>
                <textarea name="" id="" cols={30} rows={10} placeholder='Your Message' required></textarea>
                <span className={styles.focus}></span>
            </div>

            <div className={`${styles.btnBox} ${styles.btns}`}>
                <button type='submit' className={styles.btn}>Submit</button>
            </div>
        </form>
        

    </section>
  )
}

