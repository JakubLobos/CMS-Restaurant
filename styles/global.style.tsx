import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    h1, h2, h3, p, a {
        color: #FFFFFF;
        font-family: Arial, Helvetica, sans-serif; 
    }

    body {
        width: 100%;
        min-height: 100vh;
        background-color: #070D0D;
        scroll-behavior: smooth;
    }
`