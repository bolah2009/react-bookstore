import React from 'react';
import styles from '../css/modules/BooksForm.module.css';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const SelectCategories = () => {
  const options = categories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <select name="categories" id="category">
      <option key="placeholder" value="">
        Category
      </option>
      {options}
    </select>
  );
};

const BooksForm = () => (
  <form action="#" className={`${styles.form} d-flex col`}>
    <h2 className={styles.form_title}>Add new book</h2>
    <div className="d-flex jc-sb">
      <div className={styles.title}>
        <input
          className="data"
          placeholder="Book Title"
          type="text"
          name="title"
          id="book-title"
          minLength="1"
          required
        />
      </div>
      <div className={styles.select}>
        <SelectCategories />
      </div>
      <div className={styles.button}>
        <button type="button" id="add-book">
          Add Book
        </button>
      </div>
    </div>
  </form>
);

export default BooksForm;
