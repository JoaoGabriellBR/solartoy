import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section2;
  background-color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    text-align: center;
    font-size: 3rem;
  }

  .div-cards {
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
  }

  .card-title {
    margin: 0;
    text-align: center;
  }

  .card-text {
    text-align: center;
  }

  .card-image {
    width: 200px;
    height: 200px;
    align-self: center;
  }
`;