"use client";
import React from "react";
import styles from "../styles/Comunidades.module.css";

export default function Comunidades() {
  const linkedinQavala: string = "";
  const pathOficinas: string = "";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconcontainer}>
        <i className='bx bxs-building-house' style={{fontSize: 40}}></i>
        </div>
        <div className={styles.content}>
          <h2>Our offices</h2>
          <p>
            Find where our more than 40 offices are based around the world
            (Europe, LATAM, APAC).
          </p>
          <a href="#" className={styles.btn}>
            Nuestras oficinas
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.iconcontainer}>
          <i className="bx bxl-linkedin-square" style={{fontSize: 40}}></i>
        </div>
        <div className={styles.content}>
          <h2>Follow us</h2>
          <p>
            If you don't want to miss our activity and events, you can connect
            with Getronics on LinkedIn.
          </p>
          <a href="#" className={styles.btn}>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
