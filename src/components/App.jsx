import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from './BooksForm';

const App = () => (
  <div className="book-store d-flex col">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
