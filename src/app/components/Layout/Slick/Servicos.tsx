"use client";
import React from "react";

import styles from "./slider.module.css";
import Container from "../Container/Container";
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";

const Servicos = () => {
  return (
    <Container>
      <div className={styles.slide}>
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            <MdBusinessCenter className={styles.icon} />
            <p className={styles.text}>
              Nesse serviço você pode administrar os serviços que suas empresas
              utilizam da Prefeitura do Rio, bem como as pessoas que são
              autorizadas a responder por elas em cada serviço.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.mainContainer}>
          <div className={styles.card}>
            <MdFactCheck className={styles.icon} />
            <p className={styles.text}>
              Quando você insere um CNPJ no campo disponível, verificamos na
              Receita Federal se o seu CPF está incluído entre os representantes
              do quadro societário ou no registro de "Representante" daquele
              CNPJ; Se estiver, a empresa é adicionada ao seu perfil.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.mainContainer}>
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
      </div>
    </Container>
  );
};

export default Servicos;
