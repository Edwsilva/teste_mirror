import Card from "@/app/components/UI/Card/Card";
import styles from "./content.module.css";
import { GroupedProcurador, TProcurador } from "./Procuradores";

type Props = {
  data: GroupedProcurador;
};

const Procurador = ({ data }: Props) => {
  return (
    <div className={styles.empresa}>
      <h3 className={styles.nome}>{data.procurador}</h3>
      <div className={styles.line}></div>
      <div className={styles.subtitleContainer}>
        <p>{data.cpf}</p>
        {/* <p>{data.nomeFantasia}</p> */}
      </div>
      <div className={styles.cardsContainer}>
        {data.infos.flatMap((procurador, i) =>
          procurador.atividades.map((atividade, index) => (
            <Card
              key={`${i} - ${index}`}
              atividade={atividade}
              procurador={procurador.empresa}
              validade={procurador.periodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Procurador;
