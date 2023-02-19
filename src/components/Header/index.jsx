import React, { useState } from "react";
import { StyledHeader } from "./styles";
import logo from "../../assets/logo.png";
import HamburgerMenu from "react-hamburger-menu";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1000px" });

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 40px 0 40px",

          height: "80px",
        }}
      >
        <div>
          <img className="img" src={logo} alt="Logo Solar Toy" />
        </div>
        {isMobile ? (
          // renderiza o botão hamburguer somente no modo mobile
          <div style={{ display: "flex", alignItems: "center", cursor: "pointer"}}>
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={() => setIsOpen(!isOpen)}
              width={18}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="white"
              borderRadius={0}
              animationDuration={0.3}
            />
            {isOpen && (
              <div className="navbar-mobile">
                <li onClick={() => scrollTo("home")} className="navbar-item">
                  Home
                </li>
                <li
                  onClick={() => scrollTo("proporciona")}
                  className="navbar-item"
                >
                  O que proporciona?
                </li>
                <li
                  onClick={() => scrollTo("especificaçoes")}
                  className="navbar-item"
                >
                  Especificações
                </li>
                <li
                  onClick={() => scrollTo("importancia")}
                  className="navbar-item"
                >
                  Importância
                </li>
                <li onClick={() => scrollTo("arduino")} className="navbar-item">
                  Arduíno
                </li>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </StyledHeader>
  );
}
