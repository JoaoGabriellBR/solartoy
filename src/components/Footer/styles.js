import styled from "styled-components";
import { darkBlue } from "../../styles/colorProvider";

export const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: ${darkBlue};
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    align-items: center;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }

  .navbar-item {
    list-style: none;
    margin-right: 15px;
    cursor: pointer;
    font-size: 15px;
    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 1000px) {
      margin-left: -20px;
    }
  }

  .logo {
    width: 8.5rem;
    height: 2rem;
    margin: 0;
    padding: 1rem 0;
  }

  .social-media {
    display: flex;
    flex-direction: row;

    .icon {
      width: 1.2rem;
      height: 1.2rem;
      padding: 0 0.5rem;
      color: #fff;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .div-copyright {
    text-align: center;
    padding-top: 2rem;

    .copyright {
      font-size: 12px;
      padding: 0;
      margin: 0;
    }

    .construido {
      font-size: 10px;
    }

    .github {
      color: #fff;
    }
  }
`;
