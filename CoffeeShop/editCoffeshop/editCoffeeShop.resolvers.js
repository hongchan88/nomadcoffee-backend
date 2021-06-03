import client from "../../client";
import { protectedResolver } from "../../user/users.utilis";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitutde, longitude, file, shopid },
        { loggedInUser }
      ) => {
        const updatedCoffeeshop = await client.coffeeShop.update({
          where: {
            id: shopid,
          },
          data: {
            name,
            latitutde,
            longitude,
            file,
          },
        });
        console.log(loggedInUser);

        if (updatedCoffeeshop.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "could not update profile",
          };
        }
      }
    ),
  },
};
