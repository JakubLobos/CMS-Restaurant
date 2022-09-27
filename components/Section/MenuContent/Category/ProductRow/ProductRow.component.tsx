import { FC, ReactElement } from "react";
import { Price } from "./Price/Price.style";
import { StyledProductRow } from "./ProductRow.style";

interface ProductProperties {
    children: ReactElement[];
    price: string;
    amount: string;
}

export const ProductRow:FC<ProductProperties> = (props) => {
    return (
        <StyledProductRow>
            <h3>Futomaki</h3>
            <ul>{props.children}</ul>
            <Price>{props.price}</Price>
            <p>{props.amount}pcs.</p>
        </StyledProductRow>
    )
}