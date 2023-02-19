import React from "react";
import { StyledSection } from "./styles";
import miniCarro from "../../assets/minicarro.png";
import Button from "../Button";

export default function BrinquedoEducativo() {

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <StyledSection id="home">
      <div className="div-text">
        <h1 className="title">Brinquedo educativo de energia fotovoltaica.</h1>
        <p className="text">
          O Mini Carro Solar é um projeto de eletrônica e tecnologia que tem
          como objetivo fomentar a criatividade, sendo completamente autônomo em
          seu funcionamento.
        </p>
        <Button onClick={() => scrollTo("especificaçoes")}>Conhecer</Button>
      </div>

      <div className="div-image">
        <img className="image" src={miniCarro} alt="Mini carro" />
      </div>
    </StyledSection>
  );
}
