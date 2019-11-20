import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, setCategoryFilter } from '../actions';
import styles from '../css/modules/BooksList.module.css';
import CategoryFilter from '../components/CategoryFilter';
import categories from '../helpers/bookCategories';

const getFilterBooks = ({ books, filter }) => {
  if (categories.includes(filter)) {
    return {
      books: books.filter(book => book.category === filter),
      filter,
    };
  }
  return { books, filter: 'All' };
};

const BookList = ({ books, removeBook, setCategoryFilter }) => {
  const bookRows = books.map(book => (
    <Book handleRemoveBook={() => removeBook(book)} key={book.id} book={book} />
  ));

  return (
    <main className={styles.main}>
      <nav className={`${styles.nav} d-flex`}>
        <h1 className={styles.title}>Bookstore CMS</h1>
        <CategoryFilter handleFilterChange={filter => setCategoryFilter(filter)} />
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    </main>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }).isRequired,
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  setCategoryFilter: PropTypes.func.isRequired,
};

export default connect(
  state => getFilterBooks(state),
  { removeBook, setCategoryFilter },
)(BookList);
