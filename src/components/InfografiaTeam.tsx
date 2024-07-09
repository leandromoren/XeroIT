"use client";
import React from "react";
import styles from "../styles/InfografiaTeam.module.css";
import { TTexts } from "@/utils/textConstants";
import { Divider, Typography } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

export default function InfografiaTeam() {
  return (
    <div className={styles.containerTypo}>
      <Typography>
        <Title>
          <blockquote>Un poco de nosotros</blockquote>
        </Title>
        <Paragraph>{TTexts.introTextTeamView}</Paragraph>
        <Paragraph>
          {TTexts.introTextTeamView2 + " "}
          <Text strong>{TTexts.strongIntroTextTeamView}</Text>.
        </Paragraph>
        <Divider />
        <Title>
          <blockquote>Nuestra misión</blockquote>
        </Title>
        <Paragraph>{TTexts.nuestraMisionTextTeamView}</Paragraph>
        <Paragraph>{TTexts.nuestraMisionTextTeamView2}</Paragraph>
        <Title level={2}>Recursos digitales y contacto</Title>
        <Paragraph>
          <ul>
            <li>
              <Link href="/contacto">Formulario de contacto</Link>
            </li>
            <li>
              <Link href="/descargas" download>
                Descargar folleto Qavala
              </Link>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          Para consultas de analistas de medios y de la industria, póngase en
          contacto con:
        </Paragraph>
      </Typography>
      <div className={styles.contactContainer}>
        <h3 className={styles.contactName}>Leandro Moren</h3>
        <h5 className={styles.contactRol}>
          Marketing & Communications Manager
        </h5>
        <h5>
          Email:{" "}
          <a href="mailto:leandro.moren18@gmail.com">
            <span className={styles.email}>leandro.moren18@gmail.com</span>
          </a>
        </h5>
      </div>
    </div>
  );
}
