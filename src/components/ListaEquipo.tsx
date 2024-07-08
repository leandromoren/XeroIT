"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/ListaEquipo.module.css";
import arbolData from "../fixtures/arbolData.json";
import { Avatar, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListaEquipo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(arbolData);

  const loadMoreData = () => {
    if (loading) return;
    setLoading(true);
    fetch(arbolData.toString())
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData;
  }, []);

  return (
    <>
      <div className={styles.containerText}>
        <h2 className={styles.title}>
          <span>Quienes hacen posible</span> QAVALA {new Date().getFullYear()}
        </h2>
      </div>
      <div id="scrollableDiv" className={styles.listaContainer}>
        <InfiniteScroll
          dataLength={data.length}
          hasMore={data.length < 11}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>¡Eso es todo! 🤐</Divider>}
          next={loadMoreData}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.perfil_foto} />}
                  title={
                    <a href={item.linkedin} className={styles.goToLinkendinTag}>
                      {item.nombre + " " + item.apellido + " | " + item.rol}
                    </a>
                  }
                  description={item.email}
                />
                <div className={styles.edadData}>{item.edad + " Años"}</div>
              </List.Item>
            )}
          ></List>
        </InfiniteScroll>
      </div>
      <div>
        <br />
      </div>
    </>
  );
}
