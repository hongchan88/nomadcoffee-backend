import { createWriteStream } from "fs";
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

    let avaURL = null;

    if(avatarURL){
      const {filename, createReadStream } = await avatarURL;
      
      const newFilename = `${loggedInUser.id}-${Date.now()}-${filename}`;
        
      const readStream = createReadStream();
      const writeStream = createWriteStream(process.cwd() + "/uploads/" + newFilename);
      console.log(writeStream);
      readStream.pipe(writeStream);
      avaURL = `http://localhost:4000/static/${newFilename}`
   
    }
    

    
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
          ...(avaURL && {avatarURL:avaURL} ),
          githubUsername,
         
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
