import client from "../client";
import { protectedResolver } from "../coffee/users.utilis";



export default {
    Mutation: {
        followUser: protectedResolver (
            async ( _, {email}, {loggedInUser}) => {
                const ok = await client.user.findUnique({where: {email}});
                if(!ok){
                    return {
                        ok:false ,
                        error: "that email user does not exist"
                    };

                }
                await client.user.update({
                    where: {
                        id: loggedInUser.id,
                    },
                    data: {
                        following : {
                            connect: {
                                email,
                            },
                        },

                    },
                    
                });
                return {
                    ok: true,
                }
            } 
        )
    }
}