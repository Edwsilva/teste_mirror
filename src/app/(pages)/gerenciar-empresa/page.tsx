"use client";
import Button from "@/app/components/UI/Button/Button";
import Container from "@/app/components/Layout/Container/Container";
import React, { useState } from "react";
import Filter from "@/app/components/UI/Filter/Filter";
import styles from "./page.module.css";
import Empresas from "@/app/(pages)/gerenciar-empresa/Empresas/Empresas";

const GerenciarEmpresas = () => {
  const [filter, setFilter] = useState<string>("");

  const handleFilterTerm = (term: string) => {
    setFilter(term);
  };

  const handleFilterType = (type: string) => {
    setFilter(type);
  };

  return (
    <Container>
      <div className={styles.contentContainer}>
        <Button bg="secondary">cadastrar procurador</Button>
        <Filter
          handleFilterTerm={handleFilterTerm}
          handleFilterType={handleFilterType}
        />
        <Empresas filter={filter} />
      </div>
    </Container>
  );
};

export default GerenciarEmpresas;
