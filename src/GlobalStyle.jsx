import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
    
    body {
    margin: 0;
    font-family: "Manrope", sans-serif;
    font-style: normal;
    font-weight: 400;
    transition: 0.3s ease;
    };

    ul,
    ol {
    list-style: none;
    padding: 0;
    margin: 0;
    };

    a {
    text-decoration: none;
    };

    .button {
    cursor: pointer;
    };

    h1,
    h2,
    h3{
    margin-top: 0;
    margin-bottom: 0;
    };

    h3{
        color: #3470FF;
    }

    p {
    margin-top: 0;
    margin-bottom: 0;
    };

`;

export default GlobalStyle;