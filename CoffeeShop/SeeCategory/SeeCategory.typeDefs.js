import { gql } from "apollo-server-core";

export default gql`
  type seeCategoryResult {
    ok: Boolean!
    Category: [CoffeeShop]
  }
  type Query {
    seeCategory(cate: String!, page: Int): seeCategoryResult
  }
`;
