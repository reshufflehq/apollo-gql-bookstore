import { gql } from 'apollo-server';

export default gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    numPages: Int!
  }

  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, numPages: Int!): Book!
  }
`;
