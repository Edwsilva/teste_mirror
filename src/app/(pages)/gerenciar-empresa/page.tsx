import Button from "@/app/components/UI/Button/Button";
import Container from "@/app/components/Layout/Container/Container";
import React from "react";
import Filter from "@/app/components/UI/Filter/Filter";
import styles from "./page.module.css";
import Empresas from "@/app/(pages)/gerenciar-empresa/Empresas/Empresas";

const GerenciarEmpresas = () => {
  return (
    <Container>
      <div className={styles.contentContainer}>
        <Button bg="secondary">cadastrar procurador</Button>
        <Filter />
        <Empresas />
      </div>
    </Container>
  );
};

export default GerenciarEmpresas;
