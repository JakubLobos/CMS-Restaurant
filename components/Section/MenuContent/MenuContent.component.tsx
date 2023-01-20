import { FC, SetStateAction, useEffect, useState } from "react";
import { Category } from "./Category/Category.component";
import { MenuContentWrapper } from "./MenuContent.style";
import { ProductRow } from "./Category/ProductRow/ProductRow.component";
import { Ingredient } from "./Ingredient/Ingredinent.style";
import { GraphQLClient, gql } from "graphql-request";
import React from "react";
import { getApiRequestProps } from "../../../pages/api/CMS.service";
import { getGraphClient } from "../../../pages/api/http";

const QUERY:string = gql`
query MyQuery {
    menuCategories {
      categoryName
      id
      slug
      products {
        ... on ProductRow {
          id
          amount
          productName
          price
          ingredients {
            ... on Ingredient {
              id
              nameOfIngredient
            }
          }
        }
      }
    }
  }
  
`

export const MenuContent: FC = () => {
    // https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8nnv5lx05qd01tcef9ggegp/master
    const sushiCMS: GraphQLClient = getGraphClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8nnv5lx05qd01tcef9ggegp/master")
    const [menuCategories, setMenuCategories]:Array<[]> | SetStateAction<any> = useState([]);
    getApiRequestProps({QUERY, setMenuCategories, menuCategories, sushiCMS});

    return (
        <MenuContentWrapper>
            {menuCategories.map((category) => (
                    <Category
                        categoryHeading={category.categoryName}
                        key={category.id}
                        category={category}>
                    </Category>))};
        </MenuContentWrapper>
    )
};

            {/* <Category categoryHeading="Sushi">
                <ProductRow price="5$" amount="6">
                    <Ingredient>Cod</Ingredient>
                    <Ingredient>Salmon</Ingredient>
                    <Ingredient>Surimi</Ingredient>
                </ProductRow>
                <ProductRow price="5$" amount="6">
                    <Ingredient>Cod</Ingredient>
                    <Ingredient>Salmon</Ingredient>
                    <Ingredient>Surimi</Ingredient>
                </ProductRow>
            </Category> */}

