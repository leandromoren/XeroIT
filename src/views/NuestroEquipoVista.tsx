"use client";
import InfografiaTeam from "@/components/InfografiaTeam";
import ListaEquipo from "@/components/ListaEquipo";
import React from "react";

export default function NuestroEquipoVista() {
  return (
    <>
      <section>
        <ListaEquipo />
      </section>
      <section>
        <InfografiaTeam />
      </section>
    </>
  );
}
