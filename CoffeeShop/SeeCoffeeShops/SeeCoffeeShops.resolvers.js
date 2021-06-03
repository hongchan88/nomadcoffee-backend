import client from "../../client";

export default {
  Query: {
    seeCoffeeShops: async (_, { page }) => {
      const CoffeeShop = await client.coffeeShop.findMany({
        take: 5,
        skip: (page - 1) * 5,
      });
      console.log(CoffeeShop);
      return {
        ok: true,
        CoffeeShop,
      };
    },
  },
};
