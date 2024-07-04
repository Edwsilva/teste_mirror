import Button from "../Button/Button";
import styles from "./card.module.css";

type Props = {
  procurador: string;
  atividade: string;
  validade: string;
};

const Card = ({ procurador, atividade, validade }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <h4>{procurador}</h4>
        <div className={styles.line}></div>
      </div>
      <div className={styles.cardContainer}>
        <p>{atividade}</p>
        <p>{validade}</p>
      </div>
      <Button type="outlined" bg="secondary">
        Excluir
      </Button>
    </div>
  );
};

export default Card;
