import { gql } from "apollo-server-core";

export default gql`
  type seeCategoriesResult {
    ok: Boolean!
    Categories: [Category]
  }
  type Query {
    seeCategories(page: Int): seeCategoriesResult
  }
`;
