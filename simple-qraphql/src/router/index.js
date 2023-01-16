import cors from './cors.js'
import graphql from './graphql.js'

export const  Routers = (app) => {
    app.use(cors)
    app.use(graphql)
}
