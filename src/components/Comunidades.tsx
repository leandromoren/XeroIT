"use client";
import React from "react";
import styles from "../styles/Comunidades.module.css";

export default function Comunidades() {
  const linkedinQavala: string = "";
  const pathOficinas: string = "/nosotros/nuestras-oficinas";

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconcontainer}>
        <i className="bx bxs-building-house" style={{fontSize: 40}}></i>
        </div>
        <div className={styles.content}>
          <h2>Nuestras oficinas</h2>
          <p>
           Donde se encuentra ubicada nuestra oficina (LATAM)
          </p>
          <a href={pathOficinas} className={styles.btn}>
            Nuestras oficinas
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.iconcontainer}>
          <i className="bx bxl-linkedin-square" style={{fontSize: 40, color: "#0077B5"}}></i>
        </div>
        <div className={styles.content}>
          <h2>Seguínos en redes sociales</h2>
          <p>
          Si no quieres perderte nuestra actividad y eventos, puedes seguirnos en LinkedIn.
          </p>
          <a href={linkedinQavala} className={styles.btn}>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
