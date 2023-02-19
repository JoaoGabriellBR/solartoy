import React from "react";
import { StyledSection } from "./styles";
import cuboMagico from "../../assets/cubomagico.png";

export default function Importancia() {
  return (
    <StyledSection id="importancia">
      <div className="div-image">
        <img className="image" src={cuboMagico} alt="Cubo mágico" />
      </div>
      <div className="div-text">
        <h1 style={{fontSize: "2rem", margin: 0}}>Qual é a importância dos brinquedos educativos?</h1>
        <p style={{fontSize: "1.2rem"}}>Eles são projetados para ensinar novas habilidades e conceitos de maneira lúdica e envolvente, o que pode tornar o processo de aprendizado mais agradável e efetivo.</p>
    </div>
    </StyledSection>
  );
}
