"use client";
import React from "react";
import styles from "../styles/EmbedVideoYT.module.css";

//TODO: agregar un video enseñando la empresa o explicando quienes somos
export default function EmbedVideoYT() {
  return (
    <div className={styles.textContainer}>
      <p className={styles.text}>Completa el formulario</p>
      <p className={styles.subText}>Habla con uno de nuestros expertos</p>
      <br />
      <div className={styles.videoWrapper}>
        <iframe
          width="960"
          height="515"
          src="https://www.youtube.com/embed/5_HpmV_izJk?si=7ehFRsB1IkLi697H"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
