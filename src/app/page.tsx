"use client";
import Container from "./components/Layout/Container/Container";
import styles from "./home.module.css";
import { GoArrowRight, GoArrowDown } from "react-icons/go";
import { MdBusinessCenter, MdFactCheck, MdAssignmentAdd } from "react-icons/md";
import FormEmpresa from "./components/FormEmpresa/FormEmpresa";
import SimpleSlider from "./components/Layout/Slick/SimpleSlider";
import Servicos from "./components/Layout/Slick/Servicos";
import Example from "./exampleResponsive";

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
        {/* <Servicos />
        <SimpleSlider /> */}
        <Example />
        <FormEmpresa />
      </div>
    </Container>
  );
}
