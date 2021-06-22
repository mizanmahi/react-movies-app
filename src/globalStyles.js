import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --maxWidth: 1280px;

        --color-white: #fff;
        --color-lightGrey: #eee;
        --color-midGrey: #353535;
        --color-darkGrey: #1c1c1c;

        --font-huge: 2.5rem;
        --font-large: 1.5rem;
        --font-medium: 1.2rem
        --font-small: 1rem;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        box-sizing: border-box;
        font-family: "Abel", sans-serif;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--color-white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--color-white);
        }
    }

`;
