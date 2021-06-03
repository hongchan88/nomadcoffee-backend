import { gql } from "apollo-server-express";

export default gql`
type SeeFollowersResult {
    ok:Boolean!
    error: String
    followers: [User]
    totalPages: Int
}



    type Query {
        seeFollowers(email:String!, page: Int!): SeeFollowersResult!
    }

`