import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const query = gql`
  query GetBooks {
      getBooks {
        id
        title
        author
      }
  }
`;

export default function BookList() {
  const { data, loading, error } = useQuery(query, { pollInterval: 1000 });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
    <ul>
      {data.getBooks.map(({ id, title, author }) => (
        <li key={id}>
          {title}, {author}
        </li>
      ))}
    </ul>
  );
}
