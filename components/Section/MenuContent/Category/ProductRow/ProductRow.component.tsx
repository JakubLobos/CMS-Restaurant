import { FC, PropsWithChildren, ReactElement } from "react";
import { Price } from "./Price/Price.style";
import { StyledProductRow } from "./ProductRow.style";
import { Ingredient } from "../../Ingredient/Ingredinent.style";
import { ProductHeading } from "./ProductHeading/ProductHeading.style";

interface ProductProperties {
    children: ReactElement[];
    price: number;
    amount: number;
    productName: string;
    product: any;
}

export const ProductRow:FC<ProductProperties> = (props:ProductProperties) => {
    return (
        <StyledProductRow>
            <ProductHeading>{props.productName}</ProductHeading>
            <ul>
                {props.product.ingredients.map((ingredient) => (
                    <Ingredient key={ingredient.id}>
                            {ingredient.nameOfIngredient}
                    </Ingredient>))}
            </ul>
            <Price>{props.price}$</Price>
            <p>{props.amount}pcs.</p>
        </StyledProductRow>
    )
}