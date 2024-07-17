"use client";
import React from "react";
import styles from "../styles/BannerNuestraHistoria.module.css";

export default function BannerNuestraHistoria() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerTitle}>Orgullosos de nuestro comienzo</h2>
            <p className={styles.bannerSubtitle}>
              Potenciando tu negocio desde 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
