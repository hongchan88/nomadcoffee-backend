import { gql } from "apollo-server-core";

export default gql`
  type seeCoffeeShopsResult {
    ok: Boolean!
    CoffeeShop: [CoffeeShop]
  }
  type Query {
    seeCoffeeShops(page: Int): seeCoffeeShopsResult
  }
`;
