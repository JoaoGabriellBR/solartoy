import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section6;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 5rem 40px 5rem 40px;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    margin: 2rem 0 0 0;
  }

  .div-gif {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px){
      width: 100%;
    }

  }
  
  .div-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    @media (max-width: 1000px) {
      width: 80%;
    }
  }
  
  .gif {
    width: 30rem;
    height: 30rem;
  }
`;
