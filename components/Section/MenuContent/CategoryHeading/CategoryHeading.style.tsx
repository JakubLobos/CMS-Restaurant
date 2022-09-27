import styled from "styled-components";

export const StyledCategoryHeading = styled.div`
        width: 100%;
        max-width: 1920px;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 44px;
        z-index: 2;
        margin-bottom: 61px;

            & span {
                display: block;
                width: 100%;
                height: 3px;
                background-color: #FFFFFF;
                margin: 0 59px 0 59px;
                border-radius: 10px;
            }

            & h1 {
                font-weight: 1;
            }
`