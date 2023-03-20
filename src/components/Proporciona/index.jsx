import React from "react";
import { StyledSection } from "./styles";
import cognicao from "../../assets/cognição.png";
import criatividade from "../../assets/criatividade.png";
import coordenacao from "../../assets/coordenação.png";

export default function Proporciona() {
  const arrayCards = [
    {
      title: "Desenvolve a cognição",
      text: "O brinquedo é capaz de estimular o cérebro e desenvolver o aprendizado.",
      image: cognicao,
      alt: "Imagem desenvolve a cognição",
    },
    {
      title: "Estimula a criatividade",
      text: "Estimula a criatividade das crianças ao permitir que elas explorem conceitos de eletrônica e tecnologia de forma prática e lúdica.",
      image: criatividade,
      alt: "Imagem estimula a criatividade",
    },
    {
      title: "Promove a coordenação motora",
      text: "Desenvolve a coordenação motora, o uso da força e o equilíbrio.",
      image: coordenacao,
      alt: "Imagem promove a coordenação motora",
    },
  ];

  return (
    <StyledSection id="proporciona">
      <h1 className="title">O que o projeto proporciona?</h1>
      <div className="div-cards">
        {arrayCards.map((card, index) => (
          <div key={index} className="card">
            <img className="card-image" src={card.image} alt={card.alt} loading="lazy" />
            <h1 className="card-title">{card.title}</h1>
            <p className="card-text">{card.text}</p>
          </div>
        ))}
      </div>
    </StyledSection>
  );
}
