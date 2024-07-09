"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/ListaEquipo.module.css";
import teamData from "../fixtures/teamData.json";
import { Avatar, Card, Col, Input, Row, Button } from "antd";

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
      <div className={styles.containerText}>
        <h2 className={styles.title}>
          <span>Quienes hacen posible</span> QAVALA {new Date().getFullYear()}
        </h2>
      </div>
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
      <div className={styles.listaContainer}>
        <Row gutter={[16, 16]}>
          {filteredData.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={4}>
              <Card
                hoverable
                cover={
                  <Avatar
                    src={item.perfil_foto}
                    style={{
                      width: 100,
                      height: 100,
                      padding: 15,
                      borderRadius: 100,
                    }}
                  />
                }
              >
                <Card.Meta
                  title={
                    <a href={item.linkedin} className={styles.goToLinkendinTag}>
                      {item.nombre + " " + item.apellido}
                    </a>
                  }
                  description={
                    <>
                      <p>{item.rol}</p>
                      <p>{item.email}</p>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <br />
      </div>
    </>
  );
}
