import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helpers/bookCategories';

const filterCategories = categories.concat('All');

const CategoryFilter = ({ handleFilterChange }) => {
  const options = filterCategories.map(category => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <select
      defaultValue="All"
      onChange={({ target: { value } }) => handleFilterChange(value)}
      required
    >
      {options}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
