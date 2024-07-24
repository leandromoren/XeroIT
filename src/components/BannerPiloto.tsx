"use client";
import React from "react";
import styles from "../styles/BannerPiloto.module.css";

interface BannerPilotoProps {
  titleh1: string;
  titleh3: string;
  titleh6: string;
}

export default function BannerPioloto({
  titleh1,
  titleh3,
  titleh6,
}: BannerPilotoProps) {
  return (
    <section>
      <div className={styles.banner}>
        <div className={styles.bannertext}>
          <h1 className={styles.titleh1}>{titleh1}</h1>
          <h3 className={styles.titleh3}>{titleh3}</h3>
          <h6 className={styles.titleh6}>{titleh6}</h6>
        </div>
      </div>
    </section>
  );
}
