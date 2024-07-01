"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Alert,
  Checkbox,
} from "antd";
import countries from "../fixtures/countries.json";
import servicesData from "../fixtures/servicesData.json";
import styles from "../styles/Formulario.module.css";
import { TTexts } from "@/utils/textConstants";
import axios from "axios";
import EmbedVideoYT from "./EmbedVideoYT";

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

  const [form] = Form.useForm();

  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleCheckboxChange = (checkedValues: string[]) => {
    setSelectedServices(checkedValues);
  };

  const handleClose = () => {
    setSuccess(false);
  };

  const onFinish = async (values: any) => {
    setError(false);
    try {
      const response = await axios.post(
        "https://formspree.io/xwpeegww",
        {
          ...values,
          servicio: selectedServices,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess(true);
        form.resetFields();
        window.location.reload();
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setError(true);
    }
  };

  useEffect(() => {
    setData(servicesData);
  }, []);

  useEffect(() => {
    setCountries(countries);
  }, []);

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
      <EmbedVideoYT />
      <div className={styles.formContainer}>
        <Form
          onFinish={onFinish}
          method="POST"
          form={form}
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
          autoComplete="off"
        >
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Formulario de Contacto</h2>
            <p className={styles.formDescription}>{TTexts.pTextForm}</p>
          </div>
          <Form.Item
            label="Pais de residencia:"
            name="pais"
            rules={[
              {
                required: true,
                message: "Selecciona tu país de residencia",
              },
            ]}
          >
            <Select value={"pais"} placeholder="Selecciona tu país">
              {countries.map((country) => (
                <Select.Option key={country.code} value={country.name}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Servicios:"
            name="servicio"
            id="itemCheckbox"
            rules={[
              {
                required: true,
                message: "Selecciona al menos un servicio",
              },
            ]}
          >
            <Checkbox.Group
              value={selectedServices}
              onChange={handleCheckboxChange}
              className={styles.checkboxGroup}
            >
              {data.map((service) => (
                <Checkbox
                  name="servicio"
                  value={service.name}
                  key={service.id}
                  className={styles.serviceCheckbox}
                >
                  {service.name}
                </Checkbox>
              ))}
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            label="Nombre completo:"
            name="nombre"
            rules={[
              {
                required: true,
                message: "Ingresa un nombre.",
              },
            ]}
          >
            <Input
              placeholder="John Doe"
              type="text"
              name="nombre"
              style={{
                maxWidth: 250,
              }}
            />
          </Form.Item>
          <Form.Item
            label="Empresa"
            name="empresa"
            style={{
              maxWidth: 600,
            }}
            rules={[
              {
                required: true,
                message: "Ingresa el nombre de tu empresa.",
              },
            ]}
          >
            <Input type="text" name="empresa" placeholder="Qavala" />
          </Form.Item>
          <Form.Item
            label="Email de contacto:"
            name="email"
            rules={[
              {
                required: true,
                message: "Ingresa un email válido",
              },
            ]}
          >
            <Input placeholder="info@example.com" name="email" type="text" />
          </Form.Item>
          <Form.Item
            label="Tel. / Cel."
            name="celular"
            rules={[
              {
                required: true,
                message: "Ingresa un número telefónico",
              },
            ]}
          >
            <InputNumber
              placeholder="+541234567890"
              name="celular"
              type="number"
              style={{
                minWidth: "70%",
              }}
            />
          </Form.Item>
          <Form.Item
            label="Describe tu idea:"
            name="descripcion"
            rules={[
              {
                required: true,
                message: "Ingresa una descripción.",
              },
            ]}
          >
            <Input.TextArea placeholder="Describe tu idea" name="descripcion" />
          </Form.Item>
          <Form.Item
            name="condiciones"
            valuePropName="checked"
            className={styles.containerTerms}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(
                        new Error("Debes aceptar los términos y condiciones.")
                      ),
              },
            ]}
          >
            <Checkbox>
              He leído y acepto los{" "}
              <a href="" className={styles.terms}>
                términos
              </a>{" "}
              y{" "}
              <a href="" className={styles.terms}>
                condiciones
              </a>
            </Checkbox>
          </Form.Item>
          <div className={styles.recaptchaContainer}></div>
          <br />
          {error ? (
            <>
              <Alert
                message="Hubo un error al enviar los datos del formulario."
                type="error"
                closable
                afterClose={handleClose}
              />
            </>
          ) : null}
          {success ? (
            <>
              <Alert
                message="Formulario enviado exitosamente."
                type="success"
                closable
                afterClose={handleClose}
              />
            </>
          ) : null}
          <br />
          <Form.Item style={{ display: "flex", justifyContent: "center" }}>
            <Button
              className={styles.formSubmitButton}
              htmlType="submit"
              type="primary"
            >
              Solicitar servicio
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
