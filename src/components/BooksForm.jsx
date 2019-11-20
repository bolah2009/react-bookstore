import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/modules/BooksForm.module.css';
import { createBook } from '../actions';
import formIsValid from '../helpers/validateForm';
import categories from '../helpers/bookCategories';

const SelectCategories = ({ value, handleChange }) => {
  const options = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <select value={value} onChange={handleChange} name="category" id="book-category" required>
      <option key="placeholder" value="">
        Category
      </option>
      {options}
    </select>
  );
};

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: '',
        category: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [name]: value,
      },
    });
    formIsValid();
  }

  handleSubmit(event) {
    const {
      state: { book },
      props: { createBook },
    } = this;
    event.preventDefault();
    if (formIsValid()) {
      createBook(book);
      this.setState({
        book: {
          title: '',
          category: '',
        },
      });
    }
  }

  render() {
    const {
      book: { title, category },
    } = this.state;
    return (
      <form action="#" className={`${styles.form} d-flex col`}>
        <h2 className={styles.form_title}>Add new book</h2>
        <div className="d-flex col as-c error-message" id="error-message">
          <div className="title-message">
            Please enter a valid book name (Minimum of one character)
          </div>
          <div className="category-message">Please choose one book category</div>
        </div>
        <div className="d-flex jc-sb">
          <div className={styles.title}>
            <input
              className="data"
              placeholder="Book Title"
              type="text"
              name="title"
              value={title}
              id="book-title"
              minLength="1"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={styles.select}>
            <SelectCategories handleChange={this.handleChange} value={category} />
          </div>
          <div className={styles.button}>
            <button onClick={this.handleSubmit} type="button" id="add-book">
              Add Book
            </button>
          </div>
        </div>
      </form>
    );
  }
}

SelectCategories.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(
  ({ book }) => ({ book }),
  { createBook },
)(BooksForm);
