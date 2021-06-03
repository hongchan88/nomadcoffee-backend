import client from "../../client";
import { protectedResolver } from "../users.utilis";

export default {
  Mutation: {
    unfollowUser: protectedResolver(async (_, { email }, { loggedInUser }) => {
      const ok = await client.user.findUnique({
        where: { email },
        select: { id: true },
      });
      if (!ok) {
        return {
          ok: false,
          error: "Can't unfollow user.",
        };
      }
      await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          following: {
            disconnect: {
              email,
            },
          },
        },
      });
      return {
        ok: true,
      };
    }),
  },
};
