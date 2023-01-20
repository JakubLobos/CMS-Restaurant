import styled from "styled-components";

export const StyledCategory = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 379px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative; 
    background-color: red;

    & h2 {
        font-weight: 1;
        font-size: 46px;
        width: 100%;
        text-align: center;
    }
    & ul {
        width: 808px;
        background-color: green;
    }
`