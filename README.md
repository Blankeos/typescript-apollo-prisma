# typescript-apollo-prisma (Hackernews-Typescript)

⚛ Following the Typescript-Apollo tutorial on [HowToGraphQL.com](https://www.howtographql.com/typescript-apollo/0-introduction/)

### Notes on What I learned.

- [x] **GraphQL** is an improvement from **REST**.
- [x] **GraphQL servers** are made up of:
  - **1️⃣ Schema Definitions.** Object notation syntax of what queries look like.
  - **2️⃣ Resolvers.** Process queries and return data.
- [x] There are different ways to make **GraphQL Servers**

  ```json
  // What I know so far:

  1. 😓 Define "schema definitions" and "resolvers" manually
   • PROS: Easy to understand. (You can follow a universal GraphQL syntax)
   • CONS: Hard to maintain. (make resolvers for every schema definition)

  2. 🌟 Code-First Definitions (Nexus, a library for this)
   • PROS: Possible to do "schema definitions" + "resolvers" at the SAME TIME.
   • CONS: Hard to understand, get used to, different ways to do it for every library.
  ```

- [x] What makes up a GraphQL server (to me):

  ```json
  // 😓 Manual way:
  - GraphQL Server
  | - Schema Definitions
      | - Queries (get data)
      | - Mutations (manipulate data like POST, UPDATE, DEL, PUT in REST)
  | - Resolvers

  // 🌟 Code-first way with Nexus:
  - GraphQL server
  | - Types (Schema Definitions + Resolvers in one)
    | - Queries (get data)
    | - Mutations
  ```
