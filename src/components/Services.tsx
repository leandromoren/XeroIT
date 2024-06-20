"use client";
import styles from "../styles/Services.module.css";
import servicesData from "../fixtures/servicesData.json";
import { useEffect, useState } from "react";

export default function Services() {
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
      <div className={styles.container}>
        <h1 className={styles.heading}>Nuestros servicios</h1>
        <div className={styles.boxContainer}>
          {data.map((service) => (
            <div key={service.id} className={styles.box}>
              <i className={service.icon}></i>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href={service.href} className={styles.btn}>
                Ver servicio
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
