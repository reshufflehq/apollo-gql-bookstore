import { gql } from 'apollo-server';

export default gql`
  type Book {
    id: ID!
    title: String!
    author: String!
    pages: String
  }

  type Query {
    getBooks: [Book]
    bookByAuthor(author:String!): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!, pages: String!): Book!
  }
`;
