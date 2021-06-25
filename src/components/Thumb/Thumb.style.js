import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 10px;
    transition: all .3s;
    animation: animateThumb .5s;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);

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

export const ActorDetails = styled.div`
    background: var(--color-darkGrey);
    padding: 10px 5px;
    text-align: center ;
    border-radius: 0 0 10px 10px;
    transform: translateY(-50px);
    h3 {
        color: var(--color-white);
    }
    p {
        color: var(--color-white);
    }
`;