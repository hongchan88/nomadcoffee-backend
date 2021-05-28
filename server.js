require("dotenv").config();

import {ApolloServer} from "apollo-server";
import { getUser } from "./coffee/users.utilis";
import schema from "./schema";




const server = new ApolloServer({
schema,
context : async ({req}) => {
  console.log(req.headers);
  return {
    loggedInUser: await getUser(req.headers.token),

  }

}
});

const PORT = process.env.PORT;

server
  .listen(PORT)
  .then(() => console.log(`Server is running on http://localhost:${PORT}/`));