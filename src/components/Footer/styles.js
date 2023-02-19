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
    margin-top: -20px;

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

    @media (max-width: 1000px){
        margin-left: -20px;
    }
  }

  .logo {
    width: 150px;
    height: 150px;
    margin: 0;
    padding: 0;
  }

  .copyright {
    font-size: 12px;
  }
`;
