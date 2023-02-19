import styled from "styled-components";
import { green } from "../../styles/colorProvider";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${props => props.width || "200px"};
    height: ${props => props.height || "50px"};
    border: none;
    border-radius: 15px;
    font-size: 18px;
    font-weight: bold;
    background-color: ${green};

    &:hover {
        scale: 1.1;
        transition: ease-in-out 0.3s;
    }
`;