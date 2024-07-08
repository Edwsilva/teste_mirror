"use client";
import React, { useState, FunctionComponent } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";

import "./styles.css";

interface SampleNextArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  currentIndex: number;
  slideCount: number;
}

const SampleNextArrow: FunctionComponent<SampleNextArrowProps> = ({
  className,
  style,
  onClick,
  currentIndex,
  slideCount,
}) => {
  // const { className, style, onClick, currentIndex, slideCount } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: currentIndex < slideCount - 1 ? "block" : "none",
      }}
      onClick={onClick}
    ></div>
  );
};

const SamplePrevArrow: FunctionComponent<SampleNextArrowProps> = ({
  className,
  style,
  onClick,
  currentIndex,
  slideCount,
}) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: currentIndex === 0 ? "none" : "block",
      }}
      onClick={onClick}
    >
      Prev (current index: {currentIndex})
    </div>
  );
};
const SimpleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow currentIndex={currentIndex} slideCount={3} />,
    prevArrow: <SamplePrevArrow currentIndex={currentIndex} slideCount={0} />,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentIndex(newIndex),
  };

  return (
    <Slider {...settings}>
      <div className={styles.slide}>
        <div className={styles.mainContainerSlide}>
          <div className={styles.containerChevron}>
            <div className={styles.card}>
              <MdBusinessCenter className={styles.icon} />
              <p className={styles.text}>
                Nesse serviço você pode administrar os serviços que suas
                empresas utilizam da Prefeitura do Rio, bem como as pessoas que
                são autorizadas a responder por elas em cada serviço. Nesse
              </p>
            </div>
            {/* <Image className={styles.chevron} src={chevronRight} alt="Logo" /> */}
            {/* <SlArrowRight /> */}
          </div>
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.mainContainerSlide}>
          <div className={styles.containerChevron}>
            {/* <Image
                className={styles.chevronLeft}
                src={chevronLeft}
                alt="Logo"
              /> */}
            {/* <SlArrowLeft /> */}
            <div className={styles.card}>
              <MdFactCheck className={styles.icon} />
              <p className={styles.text}>
                Quando você insere um CNPJ no campo disponível, verificamos na
                Receita Federal se o seu CPF está incluído entre os
                representantes do quadro societário ou no registro de
                "Representante" daquele CNPJ; Se estiver, a empresa é adicionada
                ao seu perfil.
              </p>
            </div>
            {/* <Image className={styles.chevron} src={chevronRight} alt="Logo" /> */}
            {/* <SlArrowRight /> */}
          </div>
        </div>
      </div>
      <div className={styles.slide}>
        <div className={styles.mainContainerSlide}>
          <div className={styles.containerChevron}>
            {/* <Image
                className={styles.chevronLeft}
                src={chevronLeft}
                alt="Logo"
              /> */}
            {/* <SlArrowLeft /> */}
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
      </div>
    </Slider>
  );
};

export default SimpleSlider;
