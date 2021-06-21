import styled from "styled-components";

export const Wrapper = styled.div`
   height: 600px;
   background-image: linear-gradient(
         to bottom,
         rgba(0, 0, 0, 0) 41%,
         rgba(0, 0, 0, 0.65) 100%
      ),
      url(${(props) => props.image});
   background-size: 100%, cover;
   background-position: center;
   position: relative;
   animation: animateHeroImage 1s;

   @keyframes animateHeroImage {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;
export const Content = styled.div`
   padding: 50px;
   margin: 0 auto;
   max-width: var(--maxWidth);
   position: absolute;
   top: 50%;
   transform: translateY(-50%);
`;
export const Text = styled.div`
   z-index: 100;
   max-width: 700px;
   display: grid;
   grid-template-rows: repeat(2, max-content);
   grid-row-gap: 10px;
   color: var(--color-white);

   h1 {
       font-size: var(--font-huge);

       @media only screen and (max-width: 45em){
           font-size: var(--font-large);
       }
   }

   p {
       font-size: var(--font-medium);

       @media only screen and (max-width: 45em){
           font-size: var(--font-small);
       }
   }

   @media only screen and (max-width: 45em){
           max-width: 100%
       }
`;
