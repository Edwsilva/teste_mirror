import Card from "@/app/components/UI/Card/Card";
import { IEmpresa } from "./Empresas";
import styles from "./empresas.module.css";

type Props = {
  data: IEmpresa;
};

const Empresa = ({ data }: Props) => {
  return (
    <div className={styles.empresa}>
      <h3 className={styles.nome}>{data.nome}</h3>
      <div className={styles.line}></div>
      <div className={styles.subtitleContainer}>
        <p>{data.cnpj}</p>
        <p>{data.nomeFantasia}</p>
      </div>
      <div className={styles.cardsContainer}>
        {data.procuradores.flatMap((procurador) =>
          procurador.atividades.map((atividade, index) => (
            <Card
              key={index}
              atividade={atividade}
              procurador={procurador.nome}
              validade={procurador.periodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Empresa;
