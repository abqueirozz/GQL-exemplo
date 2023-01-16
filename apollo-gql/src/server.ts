import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolve } from "node:path";
import { UserResolver } from "./graphql/resolver";

export async function runServer() {
  
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: resolve(__dirname, "schema.gql"),
    validate: false
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(8081);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

runServer();
