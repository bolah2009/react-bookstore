import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/modules/Book.module.css';

const RemoveBook = ({ bookName, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      title={`Remove ${bookName}`}
      className={styles.remove}
      type="button"
    >
      Remove
    </button>
  );
};

const Book = ({ book: { id, title, category }, handleRemoveBook }) => (
  <li className={styles.book_list_item} id={id}>
    <section className={`${styles.book_card} d-flex col`}>
      <p className={styles.book_category}>{category}</p>
      <h3 className={styles.book_name}>{title}</h3>
      <RemoveBook bookName={title} handleClick={handleRemoveBook} />
    </section>
  </li>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

RemoveBook.propTypes = {
  bookName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
