"use client";
import BannerPioloto from "@/components/BannerPiloto";
import Formulario from "@/components/Formulario";
import React from "react";
import styles from "../../styles/ReclutamientoITVista.module.css";
import { Collapse, CollapseProps } from "antd";
import { TTexts } from "@/utils/textConstants";
import Link from "next/link";

export default function ReclutamientoITVista() {
    const textPanel1 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelReclutamientoIT1}</p>;
    const textPanel2 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelReclutamientoIT2}</p>;
    const textPanel3 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelReclutamientoIT3}</p>;
  
    const items: CollapseProps["items"] = [
      {
        key: "1",
        label: "Descubrimiento",
        children: textPanel1,
      },
      {
        key: "2",
        label: "Empatía",
        children: textPanel2,
      },
      {
        key: "3",
        label: "Confianza",
        children: textPanel3,
      },
    ];
  return (
    <>
      <BannerPioloto
        titleh1={"Reclutamiento especializado en IT"}
        titleh3={"¡Entrevistamos a los mejores candidatos!"}
        titleh6={""}
      />

      <section className={styles.container}>
        <h2 className={styles.title}>
          ¿Qué es el{" "}
          <span className={styles.especialTitle}>Reclutamiento IT</span>?
        </h2>
        <p className={styles.text}>{TTexts.textoSoftwareTesting1}</p>
        <p className={styles.text}>{TTexts.textoSoftwareTesting2}</p>
        <Link href="/descargas" download className={styles.button}>DESCARGAR FOLLETO</Link>
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

      <Formulario />
    </>
  );
}
