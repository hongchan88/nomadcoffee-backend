import { gql } from "apollo-server-core";

export default gql`
  type seeCoffeeShopResult {
    ok: Boolean!
    CoffeeShop: CoffeeShop
  }
  type Query {
    seeCoffeeShop(id: Int): seeCoffeeShopResult
  }
`;
