import React, { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import useForm from 'react-hook-form';
import { TextField, Button, Grid, createStyles, makeStyles } from '@material-ui/core';

const mutation = gql`
  mutation AddBook($title: String!, $author: String!, $numPages: Int!) {
    addBook(title: $title, author: $author, numPages: $numPages) {
      id
      title
      author
      numPages
    }
  }
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    inputDesktop: {
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    inputMobile: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    }
  })
);

export default function AddBookForm() {
  const classes = useStyle();
  const [addBook, { loading, error }] = useMutation(mutation);
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = useCallback(({
    title, author, numPages,
  }) => addBook({ variables: { title, author, numPages: parseInt(numPages, 10) } }), [addBook]);
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container alignItems='flex-end' direction='row'>
        <Grid item xs={4} sm={3}>
          <TextField
            label='Title'
            name='title'
            inputRef={register({ required: true, minLength: 1 })}
          />
          {errors.title && errors.title.message}
        </Grid>
        <Grid item xs={4} sm={3}>
          <TextField
            label='Author'
            name='author'
            inputRef={register({ required: true, minLength: 1 })}
          />
          {errors.author && errors.author.message}
        </Grid>
        <Grid item xs={4} sm={3}>
          <TextField
            label='Pages'
            name='numPages'
            type='number'
            inputRef={register({ required: true, min: 1 })}
          />
        </Grid>
        <Grid item sm={3} className={classes.inputDesktop}>
          <Button color='primary' variant='outlined' type='submit' disabled={loading}>
            Create a book
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.inputMobile}>
          <Button color='primary' variant='outlined' type='submit' fullWidth disabled={loading}>
            Create a book
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
