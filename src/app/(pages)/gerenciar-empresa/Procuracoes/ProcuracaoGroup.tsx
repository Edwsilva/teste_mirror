import Card from "@/app/components/UI/Card/Card";
import { FilterType, TProcuracao } from "../page";
import styles from "./procuracoes.module.css";

type Props = {
  data: TProcuracao[];
  type: FilterType;
};

const ProcuracaoGroup = ({ data, type }: Props) => {
  let nome = "";
  let subtitle1 = "";
  let subtitle2 = "";

  if (type === "empresa") {
    nome = data[0].empresaNome;
    subtitle1 = data[0].empresaCnpj;
    subtitle2 = data[0].empresaNomeFantasia;
  }

  if (type === "procurador") {
    nome = data[0].procurador;
    subtitle1 = data[0].cpf;
  }

  if (type === "atividade") {
    nome = data[0].atividade;
  }

  return (
    <div className={styles.grupo}>
      <h3 className={styles.nome}>{nome}</h3>
      <div className={styles.line}></div>
      <div className={styles.subtitleContainer}>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
      </div>
      <div className={styles.cardsContainer}>
        {data.map((procuracao, i) => (
          <Card
            key={`${i} - ${procuracao.id}`}
            type={type}
            data={procuracao}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcuracaoGroup;
