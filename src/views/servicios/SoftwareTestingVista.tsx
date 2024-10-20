"use client";
import React from "react";
import styles from "../../styles/SoftwareTestingVista.module.css";
import BannerPiloto from "@/components/BannerPiloto";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import Formulario from "@/components/Formulario";
import { TTexts } from "@/utils/textConstants";
import Image from "next/image";

export default function SoftwareTestingVista() {
  const textPanel1 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting1}</p>;
  const textPanel2 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting2}</p>;
  const textPanel3 = <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting3}</p>;

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Integración",
      children: textPanel1,
    },
    {
      key: "2",
      label: "Escalable",
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
      <BannerPiloto
        titleh1={"Pruebas de Software"}
        titleh3={"Ayudamos a construir un producto sin defectos"}
        titleh6={"Pruebas funcionales, automatizacion y unitarias"}
      />

      <section className={styles.container}>
        <h2 className={styles.title}>
          ¿Qué es el{" "}
          <span className={styles.especialTitle}>Testing de software</span>?
        </h2>
        <p className={styles.text}>{TTexts.textoSoftwareTesting1}</p>
        <p className={styles.text}>{TTexts.textoSoftwareTesting2}</p>
        <a href=".some pdf file" download className={styles.button}>
          DESCARGAR FOLLETO
        </a>
      </section>

      <section className={styles.uniqueSection}>
        <div className={styles.imageContainer}>
          <Image
            width={"900"}
            height={"900"}
            src={"/images/call-center-woman.png"}
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
                defaultActiveKey={["1","2","3"]}
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
