"use client";
import React, {
  FormEvent,
  useEffect,
  useState,
} from "react";
import { Button, Form, Input, Select, InputNumber } from "antd";
import countries from "../fixtures/countries.json";
import servicesData from "../fixtures/servicesData.json";
import styles from "../styles/Formulario.module.css";
import { TTexts } from "@/utils/textConstants";
import ReCAPTCHA from "react-google-recaptcha";
import Space from "./Space";

//TODO: si quiero ver los mails tengo que activar el formulario desde el mail y aparecen todos los submits
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

  //TODO: Modificar mensajes agregando algun pop up diciendo que se envio correctamente o eliminarlos
  const onSubmit = async (event: FormEvent) => {
    if (captcha) {
      try {
        const formData = new FormData(event.target as HTMLFormElement);
        const response = await fetch("https://formsubmit.co/abe34ac3e8cea0be152e3379c9fe427d ", {
          method: "POST",
          body: formData,
        });
        console.log(response)
        if (response.ok) {
          console.log("Form submitted successfully!");
          form.resetFields();
          window.location.reload();
        } else {
          console.error("Error submitting form:", response.status);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }

    } else {
      console.log("Debes aceptar el ReCAPTCHA")
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
            <Select placeholder="Selecciona un servicio">
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
              placeholder="John Doe"
              type="text"
              name="name"
              style={{
                maxWidth: 250,
              }}
            />
          </Form.Item>
          <Form.Item
            label="Compañía:"
            name={["user", "empresa"]}
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
            <Input type="text" name="empresa" placeholder="Qavala" />
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
            <Input
              placeholder="info@example.com"
              name="email"
              type="text"
            />
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
                message: "Este campo es necesario.",
              },
            ]}
          >
            <Input.TextArea placeholder="Describe tu idea" name="description" />
          </Form.Item>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            style={{ justifyContent: "center", display: "flex" }}
            onChange={setCaptcha}
          /> 
          <Space />
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
