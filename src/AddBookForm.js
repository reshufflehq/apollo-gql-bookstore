import React, { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useForm from 'react-hook-form';

import './AddBookForm.css';

const mutation = gql`
  mutation AddBook($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
      author
    }
  }
`;

export default function AddBookForm() {
  const [addBook, { loading, error }] = useMutation(mutation);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = useCallback((variables) => addBook({ variables }), [addBook]);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='inputItem'>
        <label htmlFor='title'>Title:</label>
        <input
          name='title'
          ref={register({ required: true, minLength: 1 })}
        />
        {errors.title && errors.title.message}
      </div>
      <div className='inputItem'>
        <label htmlFor='author'>Author:</label>
        <input
          name='author'
          ref={register({ required: true, minLength: 1 })}
        />
        {errors.author && errors.author.message}
      </div>
      <div>
        <input type='submit' disabled={loading} value='Create a book' />
      </div>
    </form>
  );
}
