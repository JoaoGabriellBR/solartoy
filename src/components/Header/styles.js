import styled from "styled-components";
import {darkBlue } from "../../styles/colorProvider";

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${darkBlue};
  color: #fff;
  padding: 0.2rem 1rem 0.2rem 1rem;

  .div-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 2.5rem 0 2.5rem;
    padding: 0.5rem 0rem;
    max-height: 5rem;

    @media (max-width: 1000px){
      margin: 0 1rem 0 1rem;
    }
  }
  
  .logo {
    width: 8.5rem;
    height: 2rem;
  }

  .navbar {
    display: inline-block;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .navbar-mobile {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
  }

  .navbar-item {
      text-decoration: none;
      list-style: none;
      color: #fff;
      margin-right: 15px;
      font-size: 15px;
      cursor: pointer;
      
      &:hover {
          opacity: 0.7;
      }
  }

  .navbar-item-mobile {
    cursor: pointer;
  }
`;