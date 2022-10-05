import { FC, PropsWithChildren, ReactElement } from "react";
import { Price } from "./Price.style";
import { StyledProductRow } from "../ProductRow.style";

interface ProductProperties {
    children: ReactElement[];
    price: number;
    amount: number;
    productName: string;
}

export const ProductRow:FC<ProductProperties> = (props:PropsWithChildren<ProductProperties>) => {
    return (
        <StyledProductRow>
            <h3>{props.productName}</h3>
            <ul>{props.children}</ul>
            <Price>{props.price}$</Price>
            <p>{props.amount}pcs.</p>
        </StyledProductRow>
    )
}