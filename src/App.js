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
      fontSize: '45px',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px',
      },
    },
    titleMobile: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
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
            <Button variant='outlined' color='secondary' href='/graphql'>Playground</Button>
          </Grid>
        </Grid>
      </AppBar>
      <Container component='section' maxWidth='xl'>
        <Grid justify="left">
          <AddBookForm />
          <BookList />
        </Grid>
      </Container>
    </>
  );
}
