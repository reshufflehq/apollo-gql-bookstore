import React, { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useForm from 'react-hook-form';
import { TextField, Button, Grid, createStyles, makeStyles } from '@material-ui/core';

const mutation = gql`
  mutation AddBook($title: String!, $author: String!, $pages: String!) {
    addBook(title: $title, author: $author, pages: $pages) {
      id
      title
      author
      pages
    }
  }
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    item: {
      margin: theme.spacing(1),
    },
  })
);

export default function AddBookForm() {
  const classes = useStyle();
  const [addBook, { loading, error }] = useMutation(mutation);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = useCallback((variables) => addBook({ variables }), [addBook]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems='flex-end' direction='row'>
        <Grid item className={classes.item}>
          <TextField
            label='Title'
            name='title'
            inputRef={register({ required: true, minLength: 1 })}
          />
          {errors.title && errors.title.message}
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            label='Author'
            name='author'
            inputRef={register({ required: true, minLength: 1 })}
          />
          {errors.author && errors.author.message}
        </Grid>
        <Grid item className={classes.item}>
          <TextField
            label='Pages'
            name='pages'
            inputRef={register({ required: true, minLength: 1 })}
          />
        </Grid>
        <Grid item className={classes.item}>
          <Button color='primary' variant='outlined' type='submit' disabled={loading}>
            Create a book
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
