import { FC } from "react";
import React from "react";
import { NavbarMain } from "./Navbar.style";
import { NavbarButtons } from "./NavbarButtons/NavbarButtons.component";
import logotype from "../../../assets/static/img/logoresta.svg"

export const Navbar: FC = () => {
    
    return(
        <NavbarMain>
            <NavbarButtons />
            <img src={logotype.src}></img>
        </NavbarMain>
    )
}
