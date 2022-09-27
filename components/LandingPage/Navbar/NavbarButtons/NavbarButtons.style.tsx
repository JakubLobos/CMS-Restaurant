import styled from "styled-components";

interface buttonProp {
    isSelected?: boolean;
}

export const NavbarButton = styled.button<buttonProp>`
    background-color: transparent;
    font-size: 46px;
    width: 100%;
    padding: 3px 0 3px 0;
    color: #FFF;
    border: none;
    text-align: start;
    opacity: ${props => props.isSelected ? '100%' : "60%"};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 10;
`