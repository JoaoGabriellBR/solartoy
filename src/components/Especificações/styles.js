import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section3;
  background-color: #eee;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: 5rem 0 5rem 0;

  @media (max-width: 1000px){
    flex-direction: column-reverse;
    align-items: center;
    margin: 2rem 0 2rem 0;
  }

  .div-image {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px){
      width: 80%;
    }
  }

  .div-accordions {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px){
      width: 80%;
    }
  }

  .minicarro {
    width: 80vmin;
    height: 80vmin;
  }

  .title {
    font-size: 45px;
  }

  .accordion {
    width: 80%;
    margin-bottom: 15px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media (max-width: 1000px) {
      width: 100%;
    }
  }
`;
