"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/SoftwareTestingVista.module.css";
import BannerPiloto from "@/components/BannerPiloto";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Formulario from "@/components/Formulario";

export default function SoftwareTestingVista() {
  const textPanel1 = <p style={{ paddingLeft: 24 }}>Integracion</p>;
  const textPanel2 = <p style={{ paddingLeft: 24 }}>Escala</p>;
  const textPanel3 = <p style={{ paddingLeft: 24 }}>Conocimiento</p>;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Integracion",
      children: textPanel1,
    },
    {
      key: "2",
      label: "Escala",
      children: textPanel2,
    },
    {
      key: "3",
      label: "Conocimiento",
      children: textPanel3,
    },
  ];

  return (
    <>
      <BannerPiloto />

      <section className={styles.container}>
        <h2 className={styles.title}>
          ¿Qué es el{" "}
          <span className={styles.especialTitle}>Testing de software</span>?
        </h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          quisquam, ut repellat nemo deleniti, consequatur, beatae quae est
          corrupti impedit similique nihil porro culpa mollitia sequi ipsa
          pariatur veniam excepturi.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          pariatur voluptatibus reiciendis dolorem nihil temporibus accusantium,
          repellendus eaque! Error illum vitae accusamus eaque debitis,
          cupiditate itaque enim. Pariatur, laborum blanditiis.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          deserunt quod? Odio officia doloribus commodi! Dolores laboriosam
          perferendis ea necessitatibus doloremque labore voluptatibus facilis
          animi ratione temporibus fugit, incidunt sequi.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos aut
          deleniti perferendis eveniet consectetur dolore sint illum, sunt
          eligendi asperiores quasi dolorem delectus tempora. Vero voluptatum
          sequi quasi aperiam natus.
        </p>
        <button className={styles.button}>DESCARGAR FOLLETO</button>
      </section>

      <section className={styles.uniqueSection}>
        <div className={styles.imageContainer}>
          <img
            src="../images/call-center-woman.png"
            className={styles.img}
            alt="Smiling Woman"
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>¿Qué nos hace únicos?</h2>
          <ul className={styles.features}>
            <li className={styles.feature}>
              <Collapse
                items={items}
                bordered={false}
                defaultActiveKey={["1"]}
              />
            </li>
          </ul>
        </div>
      </section>

      <section>
        <Formulario />
      </section>
    </>
  );
}
