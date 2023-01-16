import { GraphQLString } from 'graphql'

export const helloWordQuery = {
    hello: {
        type: GraphQLString,
        args: {
            user: { type: GraphQLString}
        },
        resolve: (_, args) => {
            return `Hello ${args.user}`
        }
    }
}

export const helloWordMutation = {
    hello: {
        type: GraphQLString,
        args: {
            user: { type: GraphQLString}
        },
        resolve: (_, args) => {
            return `Hello ${args.user}`
        }
    }
}
