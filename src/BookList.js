import React from 'react';
import { List, ListItem, Grid, Typography, makeStyles, createStyles } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const query = gql`
  query GetBooks {
      getBooks {
        id
        title
        author
        numPages
      }
  }
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    root: {
      width: '60%'
    }
  })
);

export default function BookList() {
  const classes = useStyle();
  const { data, loading, error } = useQuery(query, { pollInterval: 1000 });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
      <List>
        {data.getBooks.map(({ id, title, author, numPages }) => (
          <Grid className={classes.root} container alignItems='flex-end' direction='row'>
            <ListItem key={id}>
              <Grid item xs={3}>
                <Typography variant='body1' >{title}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle2' color='primary'>{author}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle2'>{numPages}</Typography>
              </Grid>
            </ListItem>
          </Grid>
        ))}
      </List>
  );
}
