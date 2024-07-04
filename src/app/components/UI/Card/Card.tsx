import Button from "../Button/Button";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <h4>Nome</h4>
        <div className={styles.line}></div>
      </div>
      <div className={styles.cardContainer}>
        <p>Alvará Transitório de Eventos</p>
        <p>De 20/05/2023 até 30/11/2027</p>
      </div>
      <Button type="outlined" bg="secondary">
        Excluir
      </Button>
    </div>
  );
};

export default Card;
