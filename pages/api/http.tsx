import { GraphQLClient } from "graphql-request"

export const getGraphClient = (apiUrl: string) => {
    const request: GraphQLClient = new GraphQLClient(apiUrl);
    return (
        request
    )
}