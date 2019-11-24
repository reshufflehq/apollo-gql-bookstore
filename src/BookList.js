import React from 'react';
import { ListItem, Grid, Typography, makeStyles, createStyles } from '@material-ui/core';
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
    content: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    bookRow: {
      marginTop: theme.spacing(2),
    }
  })
);

export default function BookList() {
  const classes = useStyle();
  const { data, loading, error } = useQuery(query, { pollInterval: 1000 });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
      <>
        {data.getBooks.map(({ id, title, author, numPages }) => (
          <Grid container key={id} className={classes.bookRow}>
            <Grid item xs={4} sm={3} >
              <Typography variant='body1' className={classes.content}>{title}</Typography>
            </Grid>
            <Grid item xs={4} sm={3}>
              <Typography variant='subtitle2' color='primary' className={classes.content}>{author}</Typography>
            </Grid>
            <Grid item xs={4} sm={3}>
              <Typography variant='subtitle2'>{numPages}</Typography>
            </Grid>
          </Grid>
        ))}
      </>
  );
}
