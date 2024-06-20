"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import styles from "../styles/News.module.css";
import newsData from "../fixtures/news.json"

export default function News() {
    const [data, setData] = useState<
    {
      id: number;
      link: string;
      image: string;
    }[]
  >([]);

  useEffect(() => {
    setData(newsData);
  }, []);

  return (
    <Carousel autoplay> 
    {data.map((n) => (
      <div key={n.id}>
        <a href={n.link}><img className={styles.contentStyle} src={n.image} /></a>
      </div>
    ))}
    </Carousel>
  );
}
