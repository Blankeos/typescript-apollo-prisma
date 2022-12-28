/**
 * You can run `npm run generate` to update your schema.graphql and nexus-typegen.ts file when there are any changes in your Nexus code.
 */

import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql";

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "nexus-typegen.ts"),
  },
});
