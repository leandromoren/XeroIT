"use client";
import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";
import countries from "../fixtures/countries.json";
import servicesData from "../fixtures/servicesData.json";

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
      span: 8,
    },
    wrapperCol: {
      span: 100,
    },
  };

  return (
    <div style={{ paddingLeft: 40, backgroundColor: "#0a0a0a" }}>
      <Form
        {...layout}
        name="wrap"
        labelCol={{
          flex: "150px",
        }}
        labelAlign="left"
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        onFinish={onFinish}
        style={{
          maxWidth: 650,
          backgroundColor: "#ccc",
          padding: 20,
          paddingTop: 20,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Pais de residencia:"
          name={["user", "pais"]}
          style={{}}
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
          label="Tel / cel"
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
        <Form.Item>
          <Button style={{ backgroundColor: "#03e100" }} htmlType="submit">
            Solicitar servicio
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
