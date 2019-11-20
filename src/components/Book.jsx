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
      <svg className="svg-delete" viewBox="0 0 24 24">
        <path
          fill="#000000"
          d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
        />
      </svg>
    </button>
  );
};

const Book = ({ book: { id, title, category }, handleRemoveBook }) => (
  <tr id={id}>
    <td>{title}</td>
    <td>{category}</td>
    <td>
      <RemoveBook bookName={title} handleClick={handleRemoveBook} />
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
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
