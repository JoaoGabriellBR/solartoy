import styled from "styled-components";
import {darkBlue } from "../../styles/colorProvider";

export const StyledHeader = styled.header`
  grid-area: header;
  background-color: ${darkBlue};
  color: #fff;
  padding: 1rem;
  
  .img {
      width: 150px;
      height: 150px;
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