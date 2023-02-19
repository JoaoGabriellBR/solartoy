import styled from "styled-components";

export const StyledSection = styled.section`
  grid-area: section4;
  background-color: #eee;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: 5rem 40px 5rem 40px;

  @media (max-width: 1000px) {
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

  .image {
    width: 20rem;
    height: 20rem;
  }
`;
