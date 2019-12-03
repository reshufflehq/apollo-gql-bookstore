import React from 'react';

import { Grid, AppBar, Typography, Button, Container, makeStyles, createStyles } from '@material-ui/core';

import AddBookForm from './AddBookForm';
import BookList from './BookList';

const useStyle = makeStyles((theme) =>
  createStyles({
    bar: {
      padding: theme.spacing(1),
    },
    titleDesktop: {
      fontSize: '2.8125rem',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5625rem',
      },
    },
    titleMobile: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.25rem',
      },
    }
  })
);

export default function App() {
  const classes = useStyle();
  return (
    <>
      <AppBar position='static'>
        <Grid container alignItems='center' justify='space-between' className={classes.bar}>
          <Grid item>
            <Typography variant='h3' className = {classes.titleDesktop} >Reshuffle GraphQL Powered Book Store</Typography>
            <Typography className = {classes.titleMobile} >GraphQL Book Store</Typography>
          </Grid>
          <Grid item>
            {/*
              Production note: the GraphQL Playground is enabled for production
              environments in ../backend/_handler.js only for demonstration
              purposes - if you are building a production app it is recommended
              to disable the playground.
              */}
            <Button variant='outlined' color='secondary' href='/graphql'>Playground</Button>
          </Grid>
        </Grid>
      </AppBar>
      <Container component='section' maxWidth='xl'>
        <Grid>
          <AddBookForm />
          <BookList />
        </Grid>
      </Container>
    </>
  );
}
