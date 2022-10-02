import { FC, PropsWithChildren, ReactElement } from "react";
import { StyledCategory } from "./Category.style";
// import { ProductRow } from "./ProductRow/ProductRow.component";

// musi przyjmować liste <ProductRow /> i heading kategorii.
interface CategoryProp {
    categoryHeading: string;
    children: ReactElement[];
}

export const Category:FC<CategoryProp> = (props:PropsWithChildren<CategoryProp>) => {
    return(
        <StyledCategory>
            <h2>{props.categoryHeading}</h2>
            <ul>
                {props.children}
            </ul>
        </StyledCategory>
    )
}