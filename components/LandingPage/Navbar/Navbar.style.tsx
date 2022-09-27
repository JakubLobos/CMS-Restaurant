import styled from "styled-components";

export const NavbarMain = styled.nav `
    min-height: 100px;
    display: flex;
    padding: 101px 0 0 70px ;
    position: relative;

    & img {
        max-width: 250px;
        max-height: 216px;
        position: absolute;
        top: 30px;
        left: 46.5%;
    }

    @media (max-width: 830px) {
        flex-direction: column-reverse;
        padding: 10px 0 0 70px ;

        & img {
            position: static;
            margin: 0 auto 60px auto;
        }
    }
`