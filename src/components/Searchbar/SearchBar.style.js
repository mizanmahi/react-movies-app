import styled from "styled-components";

export const Wrapper = styled.div`
   background: var(--color-midGrey);
   height: 100px;
   padding: 0 20px;
   display: flex;
   align-items: center;
`;

export const Content = styled.div`
   position: relative;
   max-width: var(--maxWidth);
   width: 100%;
   height: 60px;
   margin: 0 auto;
   background: var(--color-darkGrey);
   border-radius: 40px;
   color: var(--color-white);


    img {
        width: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 2vw;
    }

   input {
       width: 100%;
       display: none;
   }
`;
