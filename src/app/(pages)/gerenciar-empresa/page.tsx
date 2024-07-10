"use client";
import Button from "@/app/components/UI/Button/Button";
import Container from "@/app/components/Layout/Container/Container";
import React, { useState } from "react";
import Filter from "@/app/components/UI/Filter/Filter";
import styles from "./page.module.css";
import useSWR from "swr";
import { fetcher } from "@/api/empresas";
import Procuracoes from "@/app/(pages)/gerenciar-empresa/Procuracoes/Procuracoes";
import { useRouter } from "next/navigation";

export type TProcuracao = {
  id: number;
  procurador: string;
  cpf: string;
  representante: boolean;
  empresaNome: string;
  empresaNomeFantasia: string;
  empresaCnpj: string;
  periodoInicial: string;
  periodoFinal: string;
  atividade: string;
  status: string;
};

export type FilterType = "empresa" | "procurador" | "atividade";

const GerenciarEmpresas = () => {
  const [filterTerm, setFilterTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<FilterType>("empresa");

  const { data, error, isLoading } = useSWR<TProcuracao[]>(
    `http://localhost:3001/procuracoes`,
    fetcher,
  );

  if (error) return <h1>Ocorreu um erro!</h1>;
  if (isLoading || !data) return <h1>Loading...</h1>;

  const router = useRouter();

  const handleFilterTerm = (term: string) => {
    setFilterTerm(term);
  };

  const handleFilterType = (type: FilterType) => {
    setFilterType(type);
  };

  return (
    <Container>
      <div className={styles.contentContainer}>
        <Button bg="secondary" props={{ onClick: () => router.push('/cadastrar-procurador') }}>cadastrar procurador</Button>
        <Filter
          handleFilterTerm={handleFilterTerm}
          handleFilterType={handleFilterType}
          filterType={filterType}
        />
        {error && <h1>Houve um Erro!</h1>}
        {isLoading || !data && <h1>Loading...</h1>}
        {data && <Procuracoes data={data} term={filterTerm} type={filterType} />}
      </div>
    </Container>
  );
};

export default GerenciarEmpresas;
