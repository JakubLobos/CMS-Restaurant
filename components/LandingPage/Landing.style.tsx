import styled from "styled-components"
import background from "../../assets/static/img/background.png"

export const LandingWrapper = styled.div`
    width: 100%;
    min-height: 540px;
    height: 90vh; 
    background-image: url('${background.src}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`