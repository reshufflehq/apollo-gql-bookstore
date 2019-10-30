import { gql } from 'apollo-server';

export default gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book!
  }
`;
