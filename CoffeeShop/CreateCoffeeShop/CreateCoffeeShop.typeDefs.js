import { gql } from "apollo-server-express";

export default gql`
  type CreateCoffeeShopResult {
    ok: Boolean!
  }
  type Mutation {
    CreateCoffeeShop(
      name: String!

      categories: String
      file: String
    ): CreateCoffeeShopResult
  }
`;
