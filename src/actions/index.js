export const createBook = ({ title, category }) => {
  return {
    type: 'CREATE_BOOK',
    id: Date.now(),
    title,
    category,
  };
};

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});
