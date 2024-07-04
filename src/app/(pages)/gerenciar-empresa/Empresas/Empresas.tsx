"use client";
import { fetcher } from "@/api/empresas";
import useSWR from "swr";
import Empresa from "./Empresa";
import styles from "./empresas.module.css";

export interface IEmpresa {
  id: number;
  nome: string;
  nomeFantasia: string;
  representante: boolean;
  cnpj: string;
  procuradores: {
    nome: string;
    periodo: string;
    atividades: string[];
    status: "APROVADO" | "PENDENTE"; // Assuming status can only be APROVADO or PENDENTE
  }[];
  atividadesDisponiveis: string[];
}

type Props = {
  filter: string;
};

const Empresas = ({ filter }: Props) => {
  const { data, error, isLoading } = useSWR<IEmpresa[]>(
    `http://localhost:3001/empresas`,
    fetcher
  );

  if (error) return <h1>Ocorreu um erro!</h1>;
  if (isLoading || !data) return <h1>Loading...</h1>;

  return (
    <div className={styles.empresas}>
      {data
        .filter((empresa) =>
          empresa.nome.toLowerCase().includes(filter.toLowerCase())
        )
        .map((empresa, i) => (
          <Empresa key={i} data={empresa} />
        ))}
    </div>
  );
};

export default Empresas;
