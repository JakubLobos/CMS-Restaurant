import Link from "next/link";
import React from "react";
import { FC } from "react";
import { NavbarButton } from "./NavbarButtons.style";
import { NavbarButtonsWrapper } from "./NavbarButtonsWrapper.style";


export const NavbarButtons: FC = () => {
    return (
        <NavbarButtonsWrapper>
            <span></span> 
            <Link href={"/"}><NavbarButton isSelected={false}>Menu</NavbarButton></Link>
            <Link href={"/locations-reservations"}><NavbarButton isSelected={false}>Locations</NavbarButton></Link>
            <Link href={"/locations-reservations"}><NavbarButton isSelected={false}>Reservations</NavbarButton></Link>
        </NavbarButtonsWrapper>
        )
}