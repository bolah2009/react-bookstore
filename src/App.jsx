import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './components/BooksForm';

const App = () => (
  <div className="book-store d-flex col ai-c">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
