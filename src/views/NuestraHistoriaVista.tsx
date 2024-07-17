"use client";
import BannerNuestraHistoria from "@/components/BannerNuestraHistoria";
import ClientSlide from "@/components/ClientSlide";
import Comunidades from "@/components/Comunidades";
import LineaTiempo from "@/components/LineaTiempo";
import React from "react";

export default function NuestrHistoriaVista() {
  
    /* Agregar estadisticas, chartjs etc, utilizando los datos del client slide*/
  
  return (
    <>
      <section>
        <BannerNuestraHistoria />
      </section>
      <section>
        <LineaTiempo />
      </section>
      <section>
        <Comunidades />
      </section>
      <section>
        <ClientSlide />
      </section>
    </>
  );
}
