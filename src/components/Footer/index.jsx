import React from "react";
import { StyledFooter } from "./styles";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

export default function Footer() {
  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <StyledFooter>
      <img className="logo" src={logo} alt="Logo Solar Toy" loading="lazy" />
        <ul className="navbar">
          <li onClick={() => scrollTo("home")} className="navbar-item">
            Home
          </li>
          <li onClick={() => scrollTo("proporciona")} className="navbar-item">
            O que proporciona?
          </li>
          <li
            onClick={() => scrollTo("especificaçoes")}
            className="navbar-item"
          >
            Especificações
          </li>
          <li onClick={() => scrollTo("importancia")} className="navbar-item">
            Importância
          </li>
          <li onClick={() => scrollTo("arduino")} className="navbar-item">
            Arduíno
          </li>
        </ul>
      <p className="copyright">
        © 2023 Solar Toy | Todos os direitos reservados.
      </p>
    </StyledFooter>
  );
}
