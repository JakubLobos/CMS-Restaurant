import styled from "styled-components";

interface SectionProp {
    enableShadow: boolean;
}

export const Section = styled.section<SectionProp>`
    width: 100%;
    min-height: 945px;
    position: relative;
    background-color: rgb(7, 13, 13);
    display: flex;
    align-items: center;
    flex-direction: column;

    &::before {
        display: ${props => props.enableShadow ? "block" : "none"};
        content: '';
        min-height: 330px;
        width: 100%;
        position: absolute;
        z-index: 1;
        top: -195px;
        background: linear-gradient(transparent ,#070D0D , transparent) no-repeat;
    }
`