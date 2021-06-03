import { gql } from "apollo-server-express";

export default gql`
  type editCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editCoffeeShop(
      name: String
      latitutde: String
      longitude: String
      file: String
      shopid: Int
    ): editCoffeeShopResult
  }
`;
