"use client";
import React from "react";
import styles from "../styles/Timeline.module.css";

export default function Timeline() {
  return (
    <div className={styles.container}>
      <div className={styles.timeline}>
        <ul>
          <li>
            <div className={styles.timelineContent}>
              <h3 className={styles.date}>20th may, 2010</h3>
              <h1>Heading 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.timelineContent}>
              <h3 className={styles.date}>20th may, 2010</h3>
              <h1>Heading 2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.timelineContent}>
              <h3 className={styles.date}>20th may, 2010</h3>
              <h1>Heading 3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
          <li>
            <div className={styles.timelineContent}>
              <h3 className={styles.date}>20th may, 2010</h3>
              <h1>Heading 4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur tempora ab laudantium voluptatibus aut eos placeat
                laborum, quibusdam exercitationem labore.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
