const DEFAULT_STATE = {
  books: [
    {
      id: '06b6c7e3-dd44-4c21-a7fb-b52a86f40bba',
      title: 'The Hunger Games',
      category: 'Action',
    },
    {
      id: '6bbe7c32-ee70-45c7-881a-baeefe14f5f7',
      title: 'Dune',
      category: 'Sci-Fi',
    },
    {
      id: '1e5bb038-c1db-42e3-9e2a-507c9488a796',
      title: 'Capital in Twenty-First Century',
      category: 'Learning',
    },
  ],
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    return null;
  } catch (err) {
    return null;
  }
};

export const loadState = () => {
  try {
    const serializedState = () => localStorage.getItem('state');
    if (serializedState()) {
      return JSON.parse(serializedState());
    }
    saveState(DEFAULT_STATE);
    if (serializedState()) {
      return JSON.parse(serializedState());
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};
