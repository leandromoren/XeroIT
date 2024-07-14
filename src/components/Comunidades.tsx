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
          <h2>Our offices</h2>
          <p>
            Find where our more than 40 offices are based around the world
            (Europe, LATAM, APAC).
          </p>
          <a href={pathOficinas} className={styles.btn}>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur quia quos inventore voluptatibus reiciendis eum sapiente dolor eveniet temporibus animi quod sint repellat labore numquam, eaque perspiciatis harum sed! Eum.
          </p>
          <a href={linkedinQavala} className={styles.btn}>
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
