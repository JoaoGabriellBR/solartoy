import React from "react";
import { StyledSection } from "./styles";
import woman from "../../assets/mulher.png";

export default function Criatividade() {
  return (
    <StyledSection>
      <div className="div-image">
        <img className="woman" src={woman} alt="Mulher" loading="lazy" />
      </div>
      <div className="div-text">
        <blockquote style={{margin: 0, fontStyle:"italic", fontSize: "1.5rem"}}>"Separe um espaço vazio em algum canto de sua mente e a criatividade instantaneamente irá preenchê-lo.”</blockquote>
        <p>Dee Hock</p>
    </div>
    </StyledSection>
  );
}
