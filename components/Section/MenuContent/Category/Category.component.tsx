import { FC, PropsWithChildren, ReactElement, useState } from "react";
import { StyledCategory } from "./Category.style";
import { ProductRow } from "./ProductRow/ProductRow.component";

interface CategoryProp {
    categoryHeading: string;
    children?: ReactElement[];
    category: any;
}

export const Category:FC<CategoryProp> = (props:CategoryProp) => {
    return (
        <StyledCategory>
            <h2>{props.categoryHeading}</h2>
            <ul>
                {props.category.products.map((product) => (
                    <ProductRow
                        productName={product.productName}
                        price={product.price}
                        amount={product.amount}
                        key={product.id}
                        product={product}>
                    </ProductRow> ))};
            </ul>
        </StyledCategory>
    )
}