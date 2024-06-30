"use client";
import React from "react";
import styles from "../styles/BackgroundVideoHome.module.css";
import { TTexts } from "@/utils/textConstants";
import "next-cloudinary/dist/cld-video-player.css";

export default function BackgroundVideoHome() {
  const videoCloudinary =
    "https://res.cloudinary.com/dq0japns7/video/upload/v1715927295/office1_jxbjfr.mp4";

  const onClick = () => {
    console.log("/asociado");
  };
  
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className={styles.videoBackground}>
        <source src={videoCloudinary} type="video/mp4" />
      </video>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.slideLeft}>
            Descubriendo defectos,{" "}
            <strong className={styles.strongText}>
              construyendo confianza
            </strong>
          </h1>
          <p className={styles.slideLeft}>{TTexts.descripcionHomeView}</p>
          <div className={styles.buttonContainer}>
            <button onClick={onClick} className={styles.button}>
              {TTexts.buttonHomeView}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
