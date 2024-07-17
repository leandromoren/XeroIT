"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/ListaEquipo.module.css";
import teamData from "../fixtures/teamData.json";
import { Avatar, Col, Input, Row, Button } from "antd";

export default function ListaEquipo() {
  const [data, setData] = useState(teamData);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setData(teamData);
  }, []);

  const handleReset = () => {
    setSearchTerm("");
  };

  const filteredData = data.filter((item) =>
    (item.nombre + " " + item.apellido)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Equipo directivo</h2>
          <br />
          <div className={styles.searchBar}>
            <Input
              placeholder="Buscar persona"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 200, marginRight: 10 }}
            />
            <Button
              type="default"
              onClick={handleReset}
              className={styles.borrarBtn}
              style={{
                marginRight: 10,
                background: "#0A0A0A",
                color: "#f8f9fa",
                border: "2px solid #1F1F1F;",
              }}
            >
              Borrar
            </Button>
          </div>
        </div>
        <div className={styles.listaContainer}>
          <Row gutter={[24, 24]}>
            {filteredData.map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <div className={styles.cardWrapper}>
                  <div className={styles.avatar}>
                    <Avatar
                      src={item.perfil_foto}
                      style={{
                        width: 120,
                        height: 120,
                        borderRadius: 60,
                      }}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.name}>
                      <a
                        href={item.linkedin}
                        className={styles.goToLinkendinTag}
                      >
                        {item.nombre} {item.apellido}
                      </a>
                    </div>
                    <div className={styles.role}>{item.rol}</div>
                    <div className={styles.email}>{item.email}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <div>
        <br />
      </div>
    </>
  );
}
