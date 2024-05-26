"use client";
import styles from "../styles/Testimonials.module.css";
import testimonialsData from "../fixtures/testimonialsData.json";
import React, { useEffect, useState } from "react";
import { TTexts } from "@/utils/textConstants";

export default function Testimonials() {
  const [data, setData] = useState<
    {
      id: number;
      nombre: string;
      puesto: string;
      testimonio: string;
      img: string;
    }[]
  >([]);

  useEffect(() => {
    setData(testimonialsData);
  }, []);
  return (
    <>
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsHeader}>
            <h2 className={styles.testimonialsTitle}>Testimonios</h2>
          </div>
          <div className={styles.testimonialsContent}>
            <p className={styles.testimonialsIntro}>
              {TTexts.testimonialIntro}
            </p>
            <div className={styles.testimonialsGrid}>
              {data.map((item) => (
                <div key={item.id} className={styles.testimonialsItem}>
                  <div className={styles.testimonialsUser}>
                    <img
                      src={item.img}
                      alt="Error"
                      className={styles.testimonialsUserAvatar}
                    />
                  </div>
                  <div className={styles.testimonialsInfo}>
                    <h3 className={styles.testimonialsUserName}>{item.nombre}</h3>
                    <span className={styles.testimonialsUserRole}>
                      {item.puesto}
                    </span>
                    <p className={styles.testimonialsText}>
                      {item.testimonio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
