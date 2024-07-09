import { FilterType, TProcuracao } from "@/app/(pages)/gerenciar-empresa/page";
import Button from "../Button/Button";
import styles from "./card.module.css";

type Props = {
  type: FilterType;
  data: TProcuracao;
};

const Card = ({ type, data }: Props) => {
  let title = "";
  if (type === "empresa") {
    title = data.procurador;
  }

  if (type === "procurador") {
    title = data.empresaNome;
  }

  if (type === "atividade") {
    title = data.procurador;
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <h4>{title}</h4>
        <div className={styles.line}></div>
      </div>
      {type === "procurador" &&
        <div className={styles.cardContainer}>
          <p>{data.empresaCnpj}</p>
          <p>{data.empresaNomeFantasia}</p>
        </div>
      }
      {type === "atividade" &&
        <div className={styles.cardContainer}>
          <p>{data.empresaNome}</p>
          <p className={styles.subtitleAtv}>{data.empresaCnpj}</p>
          <p className={styles.subtitleAtv}>{data.empresaNomeFantasia}</p>
        </div>
      }
      <div className={styles.cardContainer}>
        <p>{data.atividade}</p>
        <p>{`${data.periodoInicial} até ${data.periodoFinal}`}</p>
      </div>
      <Button type="outlined" bg="secondary">
        Excluir
      </Button>
    </div>
  );
};

export default Card;
