import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section1;
  padding: 1rem;
  background: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 2.5rem 1.5rem 2.5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  .div-text {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  
    @media (max-width: 1200px) {
      width: 80%;
      flex-direction: column;
      align-items: center;
    }
  }

  .title {
    font-size: 3rem;
    color: #000;
    margin: 0;

    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  .text {
    font-size: 20px;
    color: #000;

    @media (max-width: 1200px) {
      text-align: center;
    }
  }

  .div-image {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
      flex-direction: column;
      width: 80%;
      text-align: center;
    }
  }

  .img {
    width: 90%;
    height: 100%;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .div1{
    width: 50%;
    height: 100%;
    background: blue;
  }

  .div2{
    width: 50%;
    height: 100%;
    background: pink;
  }
`;