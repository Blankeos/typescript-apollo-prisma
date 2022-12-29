/**
 * You can use npm run dev to start the web server and watch for any changes.
 */
import { ApolloServer } from "apollo-server";

// 1. Create an ApolloServer (The backend app). All it needs is your schema (npm generate).
import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

const port = 3000;

// 2. Run the server.
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
