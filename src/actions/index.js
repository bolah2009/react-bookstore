let nextBookId = 0;
export const createBook = ({ title, category }) => {
  nextBookId += 1;
  return {
    type: 'CREATE_BOOK',
    id: nextBookId,
    title,
    category,
  };
};

export const removeBook = ({ id }) => ({
  type: 'REMOVE_BOOK',
  id,
});
