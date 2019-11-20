import React from 'react';

import { Grid, AppBar, Typography, Divider, Button, makeStyles, createStyles } from '@material-ui/core';

import AddBookForm from './AddBookForm';
import BookList from './BookList';

const useStyle = makeStyles((theme) =>
  createStyles({
    bar: {
      padding: theme.spacing(1),
    },
  })
);

export default function App() {
  const classes = useStyle();

  return (
    <>
      <AppBar position='static'>
        <Grid container alignItems='center' justify='space-between' className={classes.bar}>
          <Grid item>
            <Typography variant='h3'>Reshuffle GraphQL Powered Book Store</Typography>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='secondary' href='/graphql'>Playground</Button>
          </Grid>
        </Grid>
      </AppBar>
      <section>
        <AddBookForm />
        <Divider />
        <BookList />
      </section>
    </>
  );
}
