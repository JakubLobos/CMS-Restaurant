import { FC, useEffect, useState } from "react";
import { Category } from "./Category/Category.component";
import { MenuContentWrapper } from "./MenuContent.style";
import { ProductRow } from "./Category/ProductRow/Price/ProductRow.component";
import { Ingredient } from "./Ingredient/Ingredinent.style";
import { GraphQLClient, gql } from "graphql-request";
import React from "react";

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
    
    const sushiCMS:GraphQLClient = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8nnv5lx05qd01tcef9ggegp/master")
    const [menuCategories, setMenuCategories]: Array<any> = useState([]);


    useEffect(() => {
        async function getStaticProps() {
            const menuCategoriesArr: any = await sushiCMS.request(QUERY); //get request from api and require content from QUERY
            setMenuCategories(menuCategoriesArr.menuCategories);
            console.log(menuCategories)
            return {
                props: { menuCategories }, //define props
                revalidate: 10, // refreshing content
            };
        };
        getStaticProps();
    }, []);

    return (
        <MenuContentWrapper>
            {
                menuCategories.map((category) => (
                    <Category
                        categoryHeading={category.categoryName}
                        key={category.id}>
                        {
                            category.products.map((product) => (
                                <ProductRow
                                    productName={product.productName}
                                    price={product.price}
                                    amount={product.amount}
                                    key={product.id}>
                                    {
                                        product.ingredients.map((ingredient) => (
                                            <Ingredient
                                                key={ingredient.id}>
                                                {ingredient.nameOfIngredient}
                                            </Ingredient>
                                        ))
                                    }
                                </ProductRow>
                            ))
                        }
                    </Category>
                ))
            }
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

