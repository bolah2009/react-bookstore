const books = (state = [], { type, id, title, category }) => {
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, { id, title, category }];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== id);
    default:
      return state;
  }
};

export default books;
