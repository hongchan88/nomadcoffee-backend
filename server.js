require("dotenv").config();

import {ApolloServer} from "apollo-server-express";
import { getUser } from "./coffee/users.utilis";
import {resolvers , typeDefs} from "./schema";
import express from "express";
import logger from "morgan";





const apollo = new ApolloServer({
resolvers,
typeDefs,

context : async ({req}) => {
  
  return {
    loggedInUser: await getUser(req.headers.token),

  }

}
});

const PORT = process.env.PORT;

const app = express();
app.use(logger("tiny"));
apollo.applyMiddleware({app});
app.use("/static", express.static("uploads"));


app.listen({ port: PORT }, () => {
  console.log(`🚀Server is running on http://localhost:${PORT}/graphql ✅`);
});