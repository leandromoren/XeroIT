"use client"
import React from "react";
import styles from "../styles/BannerPiloto.module.css";

export default function BannerPioloto() {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.bannertext}>
          <h1 className={styles.titleh1}>Flexbox Banner</h1>
          <h3 className={styles.titleh2}>Perfectly Centered</h3>
          <h6 className={styles.titleh6}>
            No matter how many lines of text you use.
          </h6>
        </div>
      </div>
    </section>
  );
}
