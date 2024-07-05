import { IEmpresa } from "../page";
import styles from './content.module.css';
import Procurador from "./Procurador";

type Props = {
  term: string;
  data: IEmpresa[];
};

export type TProcurador = {
  empresa: string;
  empresaFantasia: string;
  empresaCNPJ: string;
  procurador: string;
  cpf: string;
  periodo: string;
  atividades: string[];
  status: string;
};

export type GroupedProcurador = {
  procurador: string;
  cpf: string;
  infos: TProcurador[];
};


const Procuradores = ({ term, data }: Props) => {

  const result: TProcurador[] = [];

  data.forEach(empresa => {
    empresa.procuradores.forEach(procurador => {
      if (procurador.nome.toLowerCase().includes(term.toLowerCase())) {
        result.push({
          empresa: empresa.nome,
          empresaFantasia: empresa.nomeFantasia,
          empresaCNPJ: empresa.cnpj,
          procurador: procurador.nome,
          cpf: procurador.cpf,
          periodo: procurador.periodo,
          atividades: procurador.atividades,
          status: procurador.status
        })
      }
    })
  });

  const groupedResult: GroupedProcurador[] = Object.values(result.reduce((acc, procurador) => {
    if (!acc[procurador.procurador]) {
      acc[procurador.procurador] = {
        procurador: procurador.procurador,
        cpf: procurador.cpf,
        infos: []
      };
    }
    acc[procurador.procurador].infos.push(procurador);
    return acc;
  }, {} as Record<string, GroupedProcurador>));

  return (
    <div className={styles.filterableGroup}>
      {groupedResult.map((procurador, i) => (
        <Procurador key={i} data={procurador} />
      ))}
    </div>
  )
}

export default Procuradores