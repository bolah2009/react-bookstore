import { createStore } from 'redux';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  const store = createStore(rootReducer, loadState());

  store.subscribe(() => {
    saveState({
      books: store.getState().books,
    });
  });

  return store;
};

export default configureStore;
