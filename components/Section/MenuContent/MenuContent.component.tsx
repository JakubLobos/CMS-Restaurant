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
        }
    }
`

export const MenuContent: FC = () => {
    
    const sushiCMS:GraphQLClient = new GraphQLClient("https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8nnv5lx05qd01tcef9ggegp/master")
    const [menuCategories, setMenuCategories]:Array<any> = useState([]);

    useEffect(() => {
        async function getStaticProps() {
            const menuCategoriesArr: any = await sushiCMS.request(QUERY); //get request from api and require content from QUERY
            setMenuCategories(menu => [...menu, menuCategoriesArr]);
            console.log(menuCategoriesArr)
            console.log(menuCategories)
            return {
                props: { menuCategories }, //define props
                revalidate: 10, // refreshing content
            };
        };
        getStaticProps();
    }, []);

    // useEffect(() => {
    //     async function getStaticProps() {
    //         try {
    //             const menuCategoriesArr: any = await sushiCMS.request(QUERY);
    //             menuCategoriesArr.then((result: any) => {
    //               console.log(result)
    //               if (result) {
    //                 return setMenuCategories(result);
    //               } else { 
    //                 console.log(result)
    //               }
    //             });
    //             } catch (err) {
    //               console.log(err)
    //             }
    //     };
    //     getStaticProps();
    // }, []);


    return (
        <MenuContentWrapper>
            {
                menuCategories.map((category) => (
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