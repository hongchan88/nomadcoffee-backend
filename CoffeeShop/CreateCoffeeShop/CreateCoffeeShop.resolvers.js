import client from "../../client";
import { protectedResolver } from "../../user/users.utilis";

export default {
  Mutation: {
    CreateCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, categories, file },
        { loggedInUser }
      ) => {
        const { id } = await client.coffeeShop.create({
          data: {
            name,
            user: {
              connect: {
                id: loggedInUser.id,
              },
            },
            categories: {
              connectOrCreate: {
                where: {
                  name: categories,
                },
                create: {
                  name: categories,
                  slug: categories,
                },
              },
            },
          },
        });
        console.log(id);
        if (file) {
          await client.coffeeshopPhoto.create({
            data: {
              url: file,
              CoffeShopId: id,
              shop: {
                connect: {
                  id: id,
                },
              },
            },
          });
        }

        // await client.coffeeShop.update({
        //   where: {
        //     id: coffeeShop.id,
        //   },
        //   data: {
        //     categories: {
        //       connect: {
        //         id: 2,
        //       },
        //     },
        //   },
        // });

        return {
          ok: true,
        };
      }
    ),
  },
};
