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

  const listItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "O que proporciona?",
      link: "proporciona",
    },
    {
      name: "Especificações",
      link: "especificaçoes",
    },
    {
      name: "Importância",
      link: "importancia",
    },
    {
      name: "Arduíno",
      link: "arduino",
    },
  ];

  return (
    <StyledHeader>
      <div className="div-header">
        <img className="logo" src={logo} alt="Logo Solar Toy" loading="lazy" />
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
            {listItems.map((item) => (
              <li onClick={() => scrollTo(item.link)} className="navbar-item">
                {item.name}
              </li>
            ))}
          </ul>
        )}

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List>
            {listItems.map((item) => (
              <ListItemButton
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollTo(item.link), 100);
                }}
                className="navbar-item-mobile"
              >
                {item.name}
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </div>
    </StyledHeader>
  );
}
