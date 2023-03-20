import React, { useState } from "react";
import { StyledHeader } from "./styles";
import logo from "../../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import { Drawer, IconButton, List, ListItemButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function Header() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1000px" });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <StyledHeader>
      <div className="div-header">
        <div>
          <img className="logo" src={logo} alt="Logo Solar Toy" loading="lazy" />
        </div>
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
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

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("home"), 100);
              }}
              className="navbar-item-mobile"
            >
              Home
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("proporciona"), 100);
              }}
              className="navbar-item-mobile"
            >
              O que proporciona?
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("especificaçoes"), 100);
              }}
              className="navbar-item-mobile"
            >
              Especificações
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("importancia"), 100);
              }}
              className="navbar-item-mobile"
            >
              Importância
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollTo("arduino"), 100);
              }}
              className="navbar-item-mobile"
            >
              Arduíno
            </ListItemButton>
          </List>
        </Drawer>
      </div>
    </StyledHeader>
  );
}
