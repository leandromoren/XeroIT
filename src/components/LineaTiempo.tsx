"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Timeline.module.css";
import timelineData from "../fixtures/timelineData.json";

export default function LineaTiempo() {
  const [data, setData] = useState(timelineData);

  useEffect(() => {
    setData(timelineData);
  }, []);

  return (
    <>
      <div className={styles.timelinecontainer}>
        <div className={styles.timelineheader}>
          <h2>Un recorrido por nuestra historia...</h2>
        </div>
        <ul className={styles.timeline}>
          {data.map((d) => (
            <li key={d.id} className={styles.timelineitem}>
              <div className={styles.timelinecontent}>
                <h3 className={styles.timelinetitle}>{d.etapa}</h3>
                <p className={styles.timelinedate}>{d.fecha}</p>
                <p className={styles.timelinedescription}>
                  {d.descripcion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
