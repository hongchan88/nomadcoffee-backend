import client from "../../client";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utilis";

export default {
  Mutation: {
    editProfile: protectedResolver( async (
      _,
      { username, email, name,location, password:newpassword, avatarURL, githubUsername },
      { loggedInUser } 
    ) => {
        
        console.log("sdfsdfsdf");
        let uglyPassword = null;
        if(newpassword) {
            uglyPassword = await bcrypt.hash(newpassword , 10)
        }
      const updatedUser = await client.user.update({
        where: {
          id : loggedInUser.id,
        },
        data: {
          username,
          email,
          name,
          location,
          ...(uglyPassword && {password:uglyPassword}),
          githubUsername,
          avatarURL,
        },
      });
      if(updatedUser.id){
      return {
          ok : true,
      };
    }else {
        return {
            ok: false,
            error: "could not update profile",
        }
    } 

    },)
  },
};
