"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/Timeline.module.css";
import timelineData from "../fixtures/timelineData.json";

export default function Timeline() {
  const [data, setData] = useState<
    { id: number; estado: string; servicio: string; descripcion: string }[]
  >([]);

  useEffect(() => {
    setData(timelineData);
  }, []);

  return (
    <>
      <h1 className={styles.title}>Nuestros servicios</h1>
      <div id="serviciosId" className={styles.container}>
        <div className={styles.timeline}>
          <ul>
            {timelineData.map((item) => (
              <li key={item.id}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.state}>{item.estado}</h3>
                  <h1>{item.servicio}</h1>
                  <p>{item.descripcion}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
