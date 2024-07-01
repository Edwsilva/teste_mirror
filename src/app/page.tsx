import Container from "./components/Layout/Container/Container";
import styles from "./home.module.css";
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";

export default function Home() {
  return (
    <Container>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>O que é esse serviço?</h3>
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            <MdBusinessCenter className={styles.icon} />
            <p className={styles.text}>
              Nesse serviço você pode administrar os serviços que sua empresas
              utiliza da Prefeitura do Rio, bem como as pessoas que são
              autorizadas a responder por sua empresas em cada serviço.
            </p>
          </div>

          <div className={styles.iconContainer}>
            <GoArrowRight className={styles.arrowIconRight} />
            {/* <GoArrowDown className={styles.arrowIconDown} /> */}
          </div>

          <div className={styles.card}>
            <MdFactCheck className={styles.icon} />
            <p className={styles.text}>
              Quando você insere um CNPJ no campo disponível, verificamos na
              Receita Federal se seu CPF está incluído dentre os representantes
              do quadro societário ou no registro de "Representante" daquele
              CNPJ; Se estiver, a empresa é adicionada ao seu perfil.
            </p>
          </div>

          <div className={styles.iconContainer}>
            <GoArrowRight className={styles.arrowIconRight} />
            {/* <GoArrowDown className={styles.arrowIconDown} /> */}
          </div>

          <div className={styles.card}>
            <MdAssignmentAdd className={styles.icon} />
            <p className={styles.text}>
              Após ter adicionado um CNPJ ao seu perfil, poderá dar Procurações Virtuais
              para uma ou mais pessoas para serviços específicos e com prazos de validade
              definidos.  Basta clicar no nome da empresa e seguir as instruções do site.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
