import Container from "./components/Layout/Container/Container";
import styles from "./home.module.css";
import { GoArrowRight } from "react-icons/go";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";
import FormEmpresa from "./components/Page_Components/FormEmpresa/FormEmpresa";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <div className={styles.contentContainer}>
        <h3 className={styles.title}>O que é esse serviço?</h3>
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            <MdBusinessCenter className={styles.icon} />
            <p className={styles.text}>
              Nesse serviço você pode administrar os serviços que suas empresas
              utilizam da Prefeitura do Rio, bem como as pessoas que são
              autorizadas a responder por elas em cada serviço.
            </p>
          </div>

          <div className={styles.iconContainer}>
            <GoArrowRight className={styles.arrowIconRight} />
          </div>

          <div className={styles.card}>
            <MdFactCheck className={styles.icon} />
            <p className={styles.text}>
              Quando você insere um CNPJ no campo disponível, verificamos na
              Receita Federal se o seu CPF está incluído entre os representantes
              do quadro societário ou no registro de "Representante" daquele
              CNPJ; Se estiver, a empresa é adicionada ao seu perfil.
            </p>
          </div>

          <div className={styles.iconContainer}>
            <GoArrowRight className={styles.arrowIconRight} />
          </div>

          <div className={styles.card}>
            <MdAssignmentAdd className={styles.icon} />
            <p className={styles.text}>
              Após ter adicionado um CNPJ ao seu perfil, você poderá conceder
              procurações virtuais, para uma ou mais pessoas, para serviços
              específicos e com prazos de validade definidos. Basta clicar no
              nome da empresa e seguir as instruções do site.
            </p>
          </div>
        </div>
        <FormEmpresa />
      </div>
    </Container>
  );
}
