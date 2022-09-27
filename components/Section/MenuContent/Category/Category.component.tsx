import { FC, ReactElement } from "react";
import { StyledCategory } from "./Category.style";
// import { ProductRow } from "./ProductRow/ProductRow.component";

// musi przyjmować liste <ProductRow /> i heading kategorii.
interface CategoryProp {
    categoryHeading: string;
    children: ReactElement;
}

export const Category:FC<CategoryProp> = (props) => {

    return(
        <StyledCategory>
            <h2>{ props.categoryHeading }</h2>
            {props.children}
        </StyledCategory>
    )
}