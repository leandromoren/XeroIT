"use client";
import BannerPioloto from "@/components/BannerPiloto";
import Formulario from "@/components/Formulario";
import React from "react";
import styles from "../../styles/UxUiVista.module.css";
import { TTexts } from "@/utils/textConstants";
import { Collapse, CollapseProps } from "antd";
import Image from "next/image";

export default function UxUiVista() {
  const textPanel1 = (
    <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting1}</p>
  );
  const textPanel2 = (
    <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting2}</p>
  );
  const textPanel3 = (
    <p style={{ paddingLeft: 24 }}>{TTexts.textoLabelSoftwareTesting3}</p>
  );

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
      <BannerPioloto titleh1={"Diseño UX / UI"} titleh3={""} titleh6={""} />
      <section className={styles.container}>
        <h2 className={styles.title}>
          ¿Qué es el{" "}
          <span className={styles.especialTitle}>Diseño UX UI</span>?
        </h2>
        <p className={styles.text}>{TTexts.textoSoftwareTesting1}</p>
        <p className={styles.text}>{TTexts.textoSoftwareTesting2}</p>
        <a
          href="some pdf file"
          download
          className={styles.button}
        >
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
      <Formulario />
    </>
  );
}
