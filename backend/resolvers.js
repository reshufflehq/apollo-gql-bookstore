import { find, create, Q } from '@reshuffle/db';
import nanoid from 'nanoid';

export default {
  Query: {
    getBooks: async () => {
      const books = await find(Q.filter(Q.key.startsWith('/books/')));
      return books.map(({ value }) => value);
    },
  },
  Mutation: {
    addBook: async (_, { title, author, numPages }) => {
      const id = nanoid();
      const book = { id, title, author, numPages };
      await create(`/books/${id}`, book);
      return book;
    },
  },
};
