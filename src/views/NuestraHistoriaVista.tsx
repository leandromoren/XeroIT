"use client";
import Comunidades from "@/components/Comunidades";
import LineaTiempo from "@/components/LineaTiempo";
import React from "react";

export default function NuestrHistoriaVista() {
  //todo: revisar otras paginas de consultoras para ver que tienen en la seccion de nuestra historia
  
  
  return (
    <>
      <section>
        <LineaTiempo />
      </section>
      <section>
        <Comunidades />
      </section>
    </>
  );
}
