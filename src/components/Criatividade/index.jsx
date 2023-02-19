import React from "react";
import { StyledSection } from "./styles";
import gifRobot from "../../assets/gifrobot.gif";

export default function Criatividade() {
  return (
    <StyledSection>
      <div className="div-gif">
        <img className="gif" src={gifRobot} alt="Gif robô" />
      </div>
      <div className="div-text">
        <blockquote style={{margin: 0, fontStyle:"italic", fontSize: "1.5rem"}}>"Separe um espaço vazio em algum canto de sua mente e a criatividade instantaneamente irá preenchê-lo.”</blockquote>
        <p>Dee Hock</p>
    </div>
    </StyledSection>
  );
}
