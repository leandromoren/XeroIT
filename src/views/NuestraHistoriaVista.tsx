"use client";
import ClientSlide from "@/components/ClientSlide";
import Comunidades from "@/components/Comunidades";
import LineaTiempo from "@/components/LineaTiempo";
import React from "react";

export default function NuestrHistoriaVista() {
  {
    /* Agregar estadisticas, chartjs etc, utilizando los datos del client slide*/
  }
  return (
    <>
      <section>
        {/** Agregar un banner que diga "IMPULSANDO TU NEGOCIO DESDE 2024" */}
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
