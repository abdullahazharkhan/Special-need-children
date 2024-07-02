import React from 'react'
import styles from './ContactUs.module.css'
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div>
      <div className={styles.responsiveMap}>
        <iframe title='Fast Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2280.584966072274!2d67.26270990316506!3d24.856919712056815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3316c5276e35b%3A0x823a6a0100195ffd!2sFAST%20National%20University%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1719289807215!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
        <div className={styles.contactContainer}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <TiLocation style={{ fontSize: "40px" }} />
            <Link className={styles.link} to={"https://khi.nu.edu.pk"}>
              FAST National University, Karachi
            </Link>

          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IoMdMail style={{ fontSize: "40px", marginRight: "5px" }} />
            <Link className={styles.link} to={"mailto:anam.qureshi@nu.edu.pk"}>
              anam.qureshi@nu.edu.pk
            </Link>

          </div>
        </div>
      </div >
    </div >
  )
}

export default ContactUs
