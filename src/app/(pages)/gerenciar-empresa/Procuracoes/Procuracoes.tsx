// "use client";
import Procuracao from "./ProcuracaoGroup";
import styles from "./procuracoes.module.css";
import { FilterType, TProcuracao } from "../page";

type Props = {
  data: TProcuracao[];
  term: string;
  type: FilterType;
};

const groupBy = <T, K extends keyof T>(array: T[], key: K) => {
  return array.reduce((result, currentValue) => {
    const groupKey = currentValue[key];
    console.log(`groupKey - ${groupKey}`);
    console.log(`Result 1 - ${result}`);
    console.log(`currentValue - ${currentValue}`)
    if (typeof groupKey === 'string' || typeof groupKey === 'number') {
      if (!result[groupKey]) {
        result[groupKey] = [];
        console.log(`Result 2 - ${result}`);
      }
      result[groupKey].push(currentValue);
    }
    return result;
  }, {} as Record<string | number, T[]>);
};

const Procuracoes = ({ data, term, type }: Props) => {
  const filter = type === "empresa" ? "empresaNome" : type === "procurador" ? "procurador" : "atividade";

  const filteredData = groupBy(data.filter((procuracao) =>
    procuracao[filter].toLowerCase().includes(term.toLowerCase())
  ), filter);

  console.log(filteredData);

  return (
    <div className={styles.procuracoes}>
      {Object.entries(filteredData).map((data, i) => (
        <Procuracao key={i} data={data[1]} type={type} />
      ))}
    </div>
  );
};

export default Procuracoes;
