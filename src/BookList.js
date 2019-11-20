import React from 'react';
import { List, ListItem, Typography, makeStyles, createStyles } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const query = gql`
  query GetBooks {
      getBooks {
        id
        title
        author
        pages
      }
  }
`;

const useStyle = makeStyles((theme) =>
  createStyles({
    title: {
      marginRight: theme.spacing(1),
    },
  })
);

export default function BookList() {
  const classes = useStyle();
  const { data, loading, error } = useQuery(query, { pollInterval: 1000 });
  if (loading) return <div>Loading...</div>;
  if (error) return <p>ERROR</p>;
  return (
    <List>
      {data.getBooks.map(({ id, title, author, pages }) => (
        <ListItem key={id}>
          <Typography variant='body1' className={classes.title}>{title}</Typography>
          <Typography variant='subtitle2' className={classes.title} color='primary'>{author}</Typography>
          <Typography variant='subtitle2'>{pages}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
