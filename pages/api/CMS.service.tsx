import { GraphQLClient } from "graphql-request";
import { useEffect } from "react";

interface apiRequestProps {
    QUERY: string;
    setMenuCategories: ReturnType<any>;
    menuCategories: Array<[]>;
    sushiCMS: any;
}

//to do zrobic uniwersalne nazwy bo wtf np. zamiast menuCategoriesArr to ApiCallbackArr, zamiast sushiCMS to CMS

export const getApiRequestProps = ({QUERY, setMenuCategories, menuCategories, sushiCMS}:apiRequestProps) => {
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
}