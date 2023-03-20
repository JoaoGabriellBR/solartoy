import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section6;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding: 5rem 2.5rem 5rem 2.5rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  .div-image {
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
  
  .woman {
    width: 90%;
    height: 100%;
  }
`;
