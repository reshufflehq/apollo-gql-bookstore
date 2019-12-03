import express from 'express';
import { defaultHandler } from '@reshuffle/server-function';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  /* production note: remove the two following lines to enable the playground
   * only in development mode */
  introspection: true,
  playground: true,
});
apollo.applyMiddleware({ app });
app.use(defaultHandler);

export default app;
