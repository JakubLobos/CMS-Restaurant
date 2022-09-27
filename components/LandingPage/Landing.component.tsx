import React from "react";
import { FC } from "react";
import { LandingWrapper } from "./Landing.style";
import { Navbar } from "./Navbar/Navbar.component";

export const LandingPage: FC = () => {
    return (
        <LandingWrapper>
            <Navbar/>
        </LandingWrapper>
    )
}