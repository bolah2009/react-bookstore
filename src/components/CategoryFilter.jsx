import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helpers/bookCategories';
import styles from '../css/modules/CategoryFilter.module.css';

const filterCategories = categories.concat('All');

const CategoryFilter = ({ category, handleFilterChange }) => {
  const options = filterCategories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <label className="d-flex wrap" htmlFor="categories">
      <h4 className={styles.label_text}>Categories</h4>
      <select
        id="categories"
        className={styles.select}
        value={category}
        onChange={({ target: { value } }) => handleFilterChange(value)}
        required
      >
        {options}
      </select>
    </label>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoryFilter;
