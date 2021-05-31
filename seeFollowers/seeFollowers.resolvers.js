import client from "../client"

export default {
    Query: {
        seeFollowers: async (_, {email, page}) => {
            const followers = await client.user.findUnique({where: {email}}).followers({
                take: 5,
                skip: (page - 1)*5,
            });
            const totalFollowers = await client.user.count({
                where : {following: {some : {email}}}

            });

            return {
                ok: true , 
                followers,
                totalPages: Math.ceil((totalFollowers / 5)) ,
            }
        }
    }


}