"use client";
import React, { useEffect, useState } from "react";
import clientsData from "../fixtures/clientsData.json";
import styles from "../styles/ClientSlide.module.css";
import { TTexts } from "../utils/textConstants";
import LowStadistics from "./LowStadistics";
import { Carousel } from "antd";

export default function ClientSlider() {
  const [data, setData] = useState(clientsData);

  useEffect(() => {
    setData(clientsData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h3 id={styles.clientsId} className={styles.title}>
        {TTexts.clientSlideMainText}
      </h3>
      <div className={styles.container}>
        <Carousel {...settings} autoplay className={styles.carouselMain}>
          {data.map((n) => (
            <div key={n.id} className={styles.carouselItem}>
              <img className={styles.image} src={n.logo} alt={n.logo} />
            </div>
          ))}
        </Carousel>
        <div className={styles.stadisticsContainer}>
          <LowStadistics />
        </div>
      </div>
    </>
  );
}
