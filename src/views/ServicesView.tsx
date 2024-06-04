"use client";
import styles from "../styles/ServicesView.module.css";
import servicesData from "../fixtures/servicesData.json";
import { useEffect, useState } from "react";

export default function ServicesVista() {
  const [data, setData] = useState<
    {
      id: number;
      name: string;
      description: string;
      href: string;
      icon: string;
    }[]
  >([]);

  useEffect(() => {
    setData(servicesData);
  }, []);

  return (
    <>
      <main className={styles.main}>
        <img
          className={styles.servicesHeaderImg}
          src="https://raw.githubusercontent.com/LambdaSchool/UI-III-Flexbox/master/great-idea/img/services-header.jpg"
          alt="Our services header image"
        />

        <section id={styles.services}>
          <h1>Sobre nuestros servicios</h1>
          <p>
          Creamos soluciones para el futuro de tu empresa
          </p>
        </section>
        <section id={styles.cardsContainer}>
          {data.map((service) => (
            <section key={service.id} className={styles.card}>
              <img src="https://raw.githubusercontent.com/LambdaSchool/UI-III-Flexbox/master/great-idea/img/services-header.jpg" alt="Imagen del servicio"></img>
              <h1>{service.name}</h1>
              <p>{service.description}</p>
                <a className={styles.btn} href={service.href}>Contratar servicio</a>
            </section>
          ))}
        </section>

        <hr />

        <section id={styles.facts}>
          <div id={styles.factsContent}>
            <h1>Some Facts About Our Services</h1>

            <p>
              Nulla suscipit interdum diam at maximus. Proin vitae tellus
              rutrum, accumsan nunc sit amet, iaculis tortor. Mauris consectetur
              feugiat justo quis aliquet. Curabitur cursus et justo eu
              consequat. Fusce finibus sem neque, sed faucibus nibh pellentesque
              eleifend. Mauris euismod facilisis iaculis.
            </p>
          </div>

          <img
            className="services-info-img"
            src="https://raw.githubusercontent.com/LambdaSchool/UI-III-Flexbox/master/great-idea/img/services-info.png"
            alt="one of our employees hard at work"
          />
        </section>
      </main>
    </>
  );
}
