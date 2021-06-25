import styled from "styled-components";

export const Wrapper = styled.div`
   max-width: var(--maxWidth);
   margin: 0 auto;
   padding: 0 20px;

   h1 {
      color: var(--color-midGrey);
      margin: 20px 0;

      @media only screen and (max-width: 45em) {
         font-size: var(--font-large);
         margin: 15px 0;
      }
   }
`;

export const Content = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;

`;
