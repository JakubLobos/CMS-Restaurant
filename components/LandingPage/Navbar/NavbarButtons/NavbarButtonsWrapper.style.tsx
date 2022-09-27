import styled from "styled-components";

export const NavbarButtonsWrapper = styled.div`
    width: 40%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    & .menuline {
        min-height: 3px;
        min-width: 100%;
        background-color: #FFF;
        border-radius: 100px;
    }

    @media (max-width: 830px) {
        width: 90%;
    }
`