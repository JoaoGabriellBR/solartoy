import { createGlobalStyle } from "styled-components";
import "./fontProvider.css";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Coldec Regular;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        background-color: #eee;
    }
`;
