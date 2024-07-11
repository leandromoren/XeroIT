"use client";
import React from "react";

export default function ConstruccionView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "1rem",
        }}
      >
        Página en construcción 🚧
      </div>
      <p style={{ fontSize: "1.5rem", color: "#666", marginBottom: "2rem" }}>
        Estamos trabajando en mejorar tu experiencia.
      </p>
      <div
        style={{
          backgroundColor: "#e6e6e6",
          padding: "1.5rem 2rem",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Disculpa las molestias
        </p>
        <p style={{ fontSize: "1rem", color: "#666" }}>
          Estamos haciendo todo lo posible para tener la página lista lo antes
          posible.
        </p>
      </div>
    </div>
  );
}
