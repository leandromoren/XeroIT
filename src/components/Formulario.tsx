"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";
import countries from "../fixtures/countries.json";
import servicesData from "../fixtures/servicesData.json";
import styles from "../styles/Formulario.module.css";

export default function Formulario() {
  const [country, setCountries] = useState<
    {
      code: string;
      name: string;
    }[]
  >([]);
  const [data, setData] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    setData(servicesData);
  }, []);

  useEffect(() => {
    setCountries(countries);
  }, []);

  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 100,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          dolore asperiores vero velit ducimus obcaecati molestiae rerum
          doloribus sed, fugit alias voluptatum aut, error veniam sequi ab natus
          fuga aliquid?
        </p>
      </div>
      <div className={styles.formContainer}>
        <Form
          className={styles.form}
          {...layout}
          name="wrap"
          labelCol={{
            flex: "150px",
          }}
          labelAlign="right"
          wrapperCol={{
            flex: 1,
          }}
          colon={false}
          onFinish={onFinish}
          style={{
            maxWidth: 650,
            backgroundColor: "#f8f9fa",
            padding: 30,
            marginLeft: "auto",
            fontSize: "16px",

            border: "1px solid #03e100",
          }}
          autoComplete="off"
        >
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Formulario de Contacto</h2>
            <p className={styles.formDescription}>
              Por favor, completa este formulario para que podamos conocer los
              detalles de tu proyecto. Nuestro equipo de expertos analizará tu
              idea y te contactará para diseñar una solución a tu medida. ¡No
              dejes pasar esta oportunidad de llevar tu proyecto al siguiente
              nivel!
            </p>
          </div>
          <Form.Item
            label="Pais de residencia:"
            name={["user", "pais"]}
            rules={[
              {
                required: true,
                message: "Selecciona tu país de residencia",
              },
            ]}
          >
            <Select>
              {countries.map((country) => (
                <Select.Option key={country.code} value={country.name}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Servicio:"
            name={["user", "servicio"]}
            style={{}}
            rules={[
              {
                required: true,
                message: "Este campo es necesario.",
              },
            ]}
          >
            <Select>
              {data.map((service) => (
                <Select.Option key={service.id} value={service.name}>
                  {service.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nombre completo:"
            name={["user", "name"]}
            style={{}}
            rules={[
              {
                required: true,
                message: "Este campo es necesario.",
              },
            ]}
          >
            <Input
              style={{
                maxWidth: 250,
              }}
            />
          </Form.Item>
          <Form.Item
            label="Compañía:"
            name={["user", "RSocial"]}
            style={{
              maxWidth: 600,
            }}
            rules={[
              {
                required: true,
                message: "Ingresa el nombre de tu compañía",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email de contacto:"
            name={["user", "email"]}
            style={{}}
            rules={[
              {
                required: true,
                message: "El campo email es necesario",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tel. / Cel."
            name={["user", "cel"]}
            style={{}}
            rules={[
              {
                required: true,
                message: "Ingresa un número telefónico",
              },
            ]}
          >
            <InputNumber
              style={{
                minWidth: "70%",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Describe tu idea:"
            name="TextArea"
            style={{}}
            rules={[
              {
                required: true,
                message: "Este campo es necesario.",
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button
              style={{
                backgroundColor: "#03e100",
                width: "100%",
                borderRadius: "0",
                color: "#333",
                fontFamily: "Ubuntu",
                border: "none",
              }}
              htmlType="submit"
            >
              Solicitar servicio
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
