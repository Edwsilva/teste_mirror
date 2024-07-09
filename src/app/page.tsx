"use client";
import Container from "./components/Layout/Container/Container";
import styles from "./home.module.css";
import FormEmpresa from "./(pages)/gerenciar-empresa/FormEmpresa/FormEmpresa";
import ResponsiveSlisk from "./components/Layout/Slick/ResponsiveSlick";

export default function Home() {
  return (
    <Container>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>O que é esse serviço?</h3>
        <ResponsiveSlisk />
        <FormEmpresa />
      </div>
    </Container>
  );
}
