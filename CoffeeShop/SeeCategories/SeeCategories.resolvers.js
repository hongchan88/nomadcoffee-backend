import client from "../../client";

export default {
  Query: {
    seeCategories: async (_, { page }) => {
      const Categories = await client.category.findMany({
        take: 5,
        skip: (page - 1) * 5,
      });
      console.log(Categories);
      return {
        ok: true,
        Categories,
      };
    },
  },
};
