import React from "react";
import { FC } from "react";
import { NavbarButton } from "./NavbarButtons.style";
import { NavbarButtonsWrapper } from "./NavbarButtonsWrapper.style";


export const NavbarButtons: FC = () => {
    return (
        <NavbarButtonsWrapper>
            <span className="menuline"></span>
            <NavbarButton isSelected={false}>Menu</NavbarButton>
            <NavbarButton isSelected={true}>Locations</NavbarButton>
            <NavbarButton isSelected={false}>Reservations</NavbarButton>

        </NavbarButtonsWrapper>
        )
}