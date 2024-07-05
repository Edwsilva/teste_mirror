"use client";
import Empresa from "./Empresa";
import styles from "./content.module.css";
import { IEmpresa } from "../page";

type Props = {
  term: string;
  data: IEmpresa[];
};

const Empresas = ({ term, data }: Props) => {
  // const { data, error, isLoading } = useSWR<IEmpresa[]>(
  //   `http://localhost:3001/empresas`,
  //   fetcher,
  // );

  // if (error) return <h1>Ocorreu um erro!</h1>;
  // if (isLoading || !data) return <h1>Loading...</h1>;

  return (
    <div className={styles.filterableGroup}>
      {data
        .filter((data) =>
          data.nome.toLowerCase().includes(term.toLowerCase())
        )
        .map((empresa, i) => (
          <Empresa key={i} data={empresa} />
        ))}
    </div>
  );
};

export default Empresas;
