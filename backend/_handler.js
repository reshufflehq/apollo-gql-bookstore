import express from 'express';
import { defaultHandler } from '@reshuffle/server-function';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';

const app = express();

const apollo = new ApolloServer({ typeDefs, resolvers });
apollo.applyMiddleware({ app });
app.use(defaultHandler);

export default app;
