import React from "react";
import { StyledFooter } from "./styles";
import logo from "../../assets/logo.png";

export default function Footer() {

  const year = new Date().getFullYear();

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  const listItems = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "O que proporciona?",
      link: "proporciona"
    },
    {
      name: "Especificações",
      link: "especificaçoes"
    },
    {
      name: "Importância",
      link: "importancia"
    },
    {
      name: "Arduíno",
      link: "arduino"
    },
  ]

  return (
    <StyledFooter>
      <img className="logo" src={logo} alt="Logo Solar Toy" loading="lazy" />

      <ul className="navbar">
        {listItems.map((item) => (
          <li onClick={() => scrollTo(item.link)} className="navbar-item">
            {item.name}
          </li>
        ))}
      </ul>

      <div className="div-copyright">
        <p className="copyright">
          {`© ${year} Solar Toy, Todos os direitos reservados.`}
        </p>

        <p className="construido">
          Construído por{" "}
          <a
            className="github"
            target="_blank"
            href="https://github.com/JoaoGabriellBR"
          >
            João Gabriel Silva.
          </a>
        </p>
      </div>
    </StyledFooter>
  );
}
