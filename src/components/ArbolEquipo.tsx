"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/ArbolEquipo.module.css";
import arbolData from "../fixtures/arbolData.json";

export default function ArbolEquipo() {
  const linkedinDirector = "https://www.linkedin.com/in/leandromoren/";
  const imgPrueba = "../images/perfil.jpg";

  const [data, setData] = useState(arbolData);

  useEffect(() => {
    setData(arbolData);
  }, []);

  return (
    <>
      <div className={styles.containerText}>
        <h2 className={styles.title}>
          <span>Quienes hacen posible</span> QAVALA {new Date().getFullYear()}
        </h2>
      </div>
      <div className={styles.containerTree}>
        <div className={styles.tree}>
          <ul>
            {/* CEO */}
            {data.map((item) => (
              <li key={item.ceo[0].id}>
                <a target="_blank" href={linkedinDirector}>
                  <img src={imgPrueba} alt={`${item.ceo[0].nombre}`} />
                  {item.ceo[0].nombre}
                  <p>{item.ceo[0].rol}</p>
                </a>
                <ul>
                  {/* Managers */}
                  {item.manager.map((manager) => (
                    <li key={manager.id}>
                      <a target="_blank" href={manager.link}>
                        <img src={manager.foto} alt={`${manager.nombre}`} />
                        {manager.nombre}
                        <p>{manager.rol}</p>
                      </a>
                      <ul>
                        {/* Empleados del equipo */}
                        {manager.team.map((empleado) => (
                          <li key={empleado.id}>
                            <a target="_blank" href={empleado.link}>
                              <img
                                src={empleado.foto}
                                alt={`${empleado.nombre}`}
                              />
                              {empleado.nombre}
                              <p>{empleado.rol}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
