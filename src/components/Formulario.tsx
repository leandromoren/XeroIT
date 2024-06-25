"use client";
import React, { FormEvent, useEffect, useState } from "react";
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
import ReCAPTCHA from "react-google-recaptcha";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

//TODO: si quiero ver los mails tengo que activar el formulario desde el mail y aparecen todos los submits
//TODO: Reemplazar el Select de servicios por un checkbox para que pueda seleccionar mas de 1
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

  const [captcha, setCaptcha] = useState<string | null>();

  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const [getCaptcha, setReCaptcha] = useState(false);

  const validateFields = () => {
    const fieldsToValidate = [
      { key: ["user", "pais"], label: "País de residencia" },
      { key: ["user", "servicio"], label: "Servicio" },
      { key: ["user", "name"], label: "Nombre completo" },
      { key: ["user", "empresa"], label: "Compañía" },
      { key: ["user", "email"], label: "Email de contacto" },
      { key: ["user", "cel"], label: "Tel. / Cel." },
      { key: "TextArea", label: "Describe tu idea" },
    ];

    for (let field of fieldsToValidate) {
      const value = form.getFieldValue(field.key);
      if (!value || (Array.isArray(value) && value.length === 0)) {
        return `${field.label} es requerido`;
      }
    }

    return null; // Todos los campos requeridos están llenos
  };

  const onSubmit = async (event: FormEvent) => {
    if (captcha) {
      try {
        const validationError = validateFields();
        if (validationError) {
          console.error(validationError);
          return; // Evita activar el loading si los campos estan vacios
        }
        setReCaptcha(false);
        setLoading(true);
        const formData = new FormData(event.target as HTMLFormElement);
        const response = await fetch(
          "https://formsubmit.co/abe34ac3e8cea0be152e3379c9fe427d",
          {
            method: "POST",
            body: formData,
          }
        );
        if (response.ok) {
          setLoading(false);
          form.resetFields();
          window.location.reload();
        } else {
          setError(true);
          console.error("Error submitting form:", response.status);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else if (!captcha) {
      setReCaptcha(true);
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
          form={form}
          onSubmitCapture={onSubmit}
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
            <p className={styles.formDescription}>{TTexts.pTextForm}</p>
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
            <Select placeholder="Selecciona tu país">
              {countries.map((country) => (
                <Select.Option key={country.code} value={country.name}>
                  {country.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Servicios:"
            name={["user", "servicio"]}
            rules={[
              {
                required: true,
                message: "Selecciona al menos un servicio",
              },
            ]}
          >
            <div className={styles.checkboxGroup}>
              {data.map((service) => (
                <Checkbox
                  type="checkbox"
                  name="servicios"
                  className={styles.serviceCheckbox}
                  key={service.id}
                  value={service.name}
                >
                  {service.name}
                </Checkbox>
              ))}
            </div>
          </Form.Item>
          <Form.Item
            label="Nombre completo:"
            name={["user", "name"]}
            style={{}}
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
              name="name"
              style={{
                maxWidth: 250,
              }}
            />
          </Form.Item>
          <Form.Item
            label="Empresa"
            name={["user", "empresa"]}
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
            name={["user", "email"]}
            style={{}}
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
              placeholder="+541234567890"
              name="tel"
              type="number"
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
                message: "Ingresa una descripción.",
              },
            ]}
          >
            <Input.TextArea placeholder="Describe tu idea" name="description" />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            className={styles.containerTerms}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>
              He leído y acepto los <a href="" className={styles.terms}>términos</a> y <a href="" className={styles.terms}>condiciones</a>
            </Checkbox>
          </Form.Item>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            style={{ justifyContent: "center", display: "flex" }}
            onChange={setCaptcha}
          />
          <br />
          {loading ? (
            <Spin
              indicator={<LoadingOutlined spin />}
              style={{
                justifyContent: "center",
                display: "flex",
                fontSize: "48",
              }}
              size="large"
            />
          ) : null}
          {error ? (
            <>
              <Alert
                message="Hubo un error al enviar datos del formulario."
                type="error"
              />
            </>
          ) : null}
          {getCaptcha ? (
            <>
              <Alert message="Debes marcar el reCAPTCHA." type="warning" />
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
