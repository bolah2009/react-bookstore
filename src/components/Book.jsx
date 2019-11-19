import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
  <tr id={id}>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
