import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import styles from '../css/modules/BooksList.module.css';

const BookList = ({ books }) => {
  const bookRows = books.map(book => <Book key={book.id} book={book} />);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Bookstore CMS</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
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
};

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(BookList);
