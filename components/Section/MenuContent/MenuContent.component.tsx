import { FC } from "react";
import { Category } from "./Category/Category.component";
import { MenuContentWrapper } from "./MenuContent.style";
import { ProductRow } from "./Category/ProductRow/ProductRow.component";
import { Ingredient } from "./Ingredient/Ingredinent.style";

export const MenuContent:FC = () => {
    // mapuj z API, dla każdego z kategorii stwórz kategorie i dla każdego z
    // produktów w kategorii do products="";
    return (
        <MenuContentWrapper>
            <Category categoryHeading="Sushi">
                <ProductRow price="5$" amount="6">
                    <Ingredient>Cod</Ingredient>
                    <Ingredient>Salmon</Ingredient>
                    <Ingredient>Surimi</Ingredient>
                </ProductRow>
            </Category>
        </MenuContentWrapper>
    )
}