import React from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';

export default function App() {
  return (
    <>
      <header>
        <h1>Reshuffle Book Store</h1>
      </header>
      <section>
        <AddBookForm />
        <hr />
        <BookList />
      </section>
    </>
  );
}
