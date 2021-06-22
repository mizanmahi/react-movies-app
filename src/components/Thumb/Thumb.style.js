import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 10px;
    transition: all .3s;
    animation: animateThumb .5s;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 100%;
        }
    }
`;