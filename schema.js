import { loadFilesSync, mergeResolvers, mergeTypeDefs } from "graphql-tools";





const loadedTypes = loadFilesSync(`${__dirname}/**/*.typeDefs.js`);
export const typeDefs = mergeTypeDefs(loadedTypes);

const loadedResolvers = loadFilesSync(`${__dirname}/**/*.resolvers.js`);
export const resolvers = mergeResolvers(loadedResolvers);

