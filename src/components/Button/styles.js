import styled from "styled-components";
import { darkBlue, green } from "../../styles/colorProvider";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${props => props.width || "12.5rem"};
    height: ${props => props.height || "3.1rem"};
    border: 2px solid ${darkBlue};
    border-radius: 30px;
    font-size: 18px;
    font-weight: 700;
    color: ${darkBlue};
    background-color: transparent !important;

    &:hover {
        transition: ease-in-out 0.2s;
        background-color: ${darkBlue} !important;
        color: #fcfcfc;
    }
`;