import { gql } from "apollo-server-express";

export default gql`
  type CoffeeShopPhoto {
    id: Int
    url: String
    shop: CoffeeShop
  }

  type CoffeeShop {
    id: Int
    user: User
    name: String!
    latitutde: String
    longitude: String
    photos: [CoffeeShopPhoto]
    categories: [Category]
    file: String
  }
  type Category {
    id: Int
    name: String!
    slug: String
    shops: [CoffeeShop]
    totalShops: Int
  }
`;
