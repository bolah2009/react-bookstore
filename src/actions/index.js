import { v4 } from 'node-uuid';

export const createBook = ({ title, category }) => {
  return {
    type: 'CREATE_BOOK',
    id: v4(),
    title,
    category,
  };
};

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const setCategoryFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});
