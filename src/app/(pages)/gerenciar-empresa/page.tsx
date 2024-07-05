"use client";
import Button from "@/app/components/UI/Button/Button";
import Container from "@/app/components/Layout/Container/Container";
import React, { useState } from "react";
import Filter from "@/app/components/UI/Filter/Filter";
import styles from "./page.module.css";
import Empresas from "@/app/(pages)/gerenciar-empresa/Content/Empresas";
import Procuradores from "./Content/Procuradores";
import useSWR from "swr";
import { fetcher } from "@/api/empresas";
export interface IEmpresa {
  id: number;
  nome: string;
  nomeFantasia: string;
  representante: boolean;
  cnpj: string;
  procuradores: {
    nome: string;
    cpf: string;
    periodo: string;
    atividades: string[];
    status: "APROVADO" | "PENDENTE"; // Assuming status can only be APROVADO or PENDENTE
  }[];
  atividadesDisponiveis: string[];
}

export type FilterType = "empresa" | "procurador" | "atividade";

const GerenciarEmpresas = () => {
  const { data, error, isLoading } = useSWR<IEmpresa[]>(
    `http://localhost:3001/empresas`,
    fetcher,
  );

  const [filterTerm, setFilterTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<FilterType>("empresa");

  const handleFilterTerm = (term: string) => {
    setFilterTerm(term);
  };

  const handleFilterType = (type: FilterType) => {
    setFilterType(type);
  };

  console.log("TYPE", filterType);

  if (error) return <h1>Ocorreu um erro!</h1>;
  if (isLoading || !data) return <h1>Loading...</h1>;

  return (
    <Container>
      <div className={styles.contentContainer}>
        <Button bg="secondary">cadastrar procurador</Button>
        <Filter
          handleFilterTerm={handleFilterTerm}
          handleFilterType={handleFilterType}
          filterType={filterType}
        />
        {filterType === "empresa" && <Empresas term={filterTerm} data={data} />}
        {filterType === "procurador" && <Procuradores term={filterTerm} data={data} />}
      </div>
    </Container>
  );
};

export default GerenciarEmpresas;
