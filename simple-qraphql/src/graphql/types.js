import { GraphQLString, GraphQLObjectType } from 'graphql'

export const helloWorldType = new GraphQLObjectType({
    name: 'helloWorldType',
    fields: {
        message: { type: GraphQLString }
    }
})