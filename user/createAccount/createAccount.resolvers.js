
import client from "../../client";
import bcrypt from "bcrypt";


export default {
  Mutation: {
    createAccount: async (
      _,
      { username,
        email,
        name,
        location,
        password,
        }
    ) => {
      // check if username or email are already on DB.

    
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                username,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser){
          throw new Error("this user/email is already take");
        }
       
        // hash password
        const uglyPassword = await bcrypt.hash(password, 10);
        await client.user.create({data: {
          username,
          email,
          name,
          location,
         
          password:uglyPassword,
  
        },
      });
      return {
        ok: true,
      };
      } catch(e){

        return {
          ok: false,
          error: "car't create account"
        }
      }
      // save and return the user
 
    },
    
  },
};