import client from "../../client";

export default {
  Query: {
    seeCategory: async (_, { cate, page }) => {
      const Category = await client.coffeeShop.findMany({
        take: 5,
        skip: (page - 1) * 5,
        where: {
          categories: {
            some: {
              name: cate,
            },
          },
        },
      });
      console.log(Category);
      return {
        ok: true,
        Category,
      };
    },
  },
};
