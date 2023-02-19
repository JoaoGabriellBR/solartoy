import React from "react";
import { StyledSection } from "./styles";
import arduino from "../../assets/arduino.png"

export default function AlemDisso(){
    return (
      <StyledSection id="arduino">
        <div className="div-text">
          <h1 style={{fontSize: "2rem", margin: 0}}>
            Além disso, você tem total autonomia para integrá-lo a outras tecnologias.
          </h1>
          <p style={{fontSize: "1.2rem"}}>Em geral, os brinquedos educativos tecnológicos podem ajudar as crianças a desenvolver habilidades importantes, a explorar novas ideias e a se preparar para um mundo cada vez mais tecnológico.</p>
        </div>
        <div className="div-image">
          <img className="image" src={arduino} alt="Imagem arduino" />
        </div>
      </StyledSection>
    );
}