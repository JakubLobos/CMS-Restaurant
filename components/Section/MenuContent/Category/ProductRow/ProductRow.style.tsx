import styled from "styled-components";

export const StyledProductRow = styled.li`
    width: auto;
    height: auto;
    margin: 30px 5px 0px 0;
    display: flex;
    font-size: 26px;
    align-items: center;
    & ul {
        display: flex;
        min-width: auto;
        max-width: 540px;
        position: relative;
        height: auto;

        &::before {
            position: absolute;
            bottom: 0px;
            min-width: 100%;
            display: block;
            background-color: white;
            height: 2px;
            content: '';  
            opacity: 50%;
        }
    }
`