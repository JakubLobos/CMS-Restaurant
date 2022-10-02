import { FC } from "react";
import { Category } from "./Category/Category.component";
import { MenuContentWrapper } from "./MenuContent.style";
import { ProductRow } from "./Category/ProductRow/Price/ProductRow.component";
import { Ingredient } from "./Ingredient/Ingredinent.style";
import { GraphQLClient, gql } from "graphql-request";

const sushiCMS:GraphQLClient = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8nnv5lx05qd01tcef9ggegp/master")

const QUERY:string = gql`
    query MyQuery {
        menuCategories {
        categoryName
        id
        slug
        }
    }
`

export async function getContentMenuProps() {
    const menuCategories = await sushiCMS.request(QUERY); //get request from api and require content from QUERY
    
    return {
        props: {menuCategories}, //define props
        revalidate: 10, // refreshing content
    };
};

interface MenuContentProp {
    menuCategories: Array<any>,
 }

export const MenuContent: FC<MenuContentProp> = ( {menuCategories} ) => {
    return (
        <MenuContentWrapper>
            {
                menuCategories?.map((category) => (
                    <Category categoryHeading={category.categoryName}>
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