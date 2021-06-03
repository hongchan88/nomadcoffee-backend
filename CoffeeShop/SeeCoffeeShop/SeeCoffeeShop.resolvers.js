import client from "../../client";

export default {
  Query: {
    seeCoffeeShop: async (_, { id }) => {
      const CoffeeShop = await client.coffeeShop.findUnique({
        where: {
          id: id,
        },
      });
      return {
        ok: true,
        CoffeeShop,
      };
    },
  },
};
