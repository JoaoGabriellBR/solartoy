import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto; // definimos a primeira e última linhas do grid para o header e footer respectivamente
  grid-template-columns: repeat(2, 1fr); // definimos 2 colunas para o grid

  grid-template-areas:
    "header header"
    "section1 section1"
    "section2 section2"
    "section3 section3"
    "section4 section4"
    "section5 section5"
    "section6 section6"
    "footer footer";

  min-height: 100vh; // garantimos que o container terá pelo menos a altura da viewport
`;

export const Header = styled.header`
  grid-area: header;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

export const Footer = styled.footer`
  grid-area: footer;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

export const Section1 = styled.section`
  grid-area: section1;
  background-color: #fff;
  padding: 1rem;
`;

export const Section2 = styled.section`
  grid-area: section2;
  background-color: #eee;
  padding: 1rem;
`;

export const Section3 = styled.section`
  grid-area: section3;
  background-color: #fff;
  padding: 1rem;
`;

export const Section4 = styled.section`
  grid-area: section4;
  background-color: #eee;
  padding: 1rem;
`;

export const Section5 = styled.section`
  grid-area: section5;
  background-color: #eee;
  padding: 1rem;
`;

export const Section6 = styled.section`
  grid-area: section6;
  background-color: #eee;
  padding: 1rem;
`;
