import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';
import { helloWordQuery } from './model.js';

export const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            ...helloWordQuery,
        })
    }),
    // mutation: new GraphQLObjectType({
    //     name: 'Mutation',
    //     fields: () => {

    //     }
    // })
})
