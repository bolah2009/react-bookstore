const formIsValid = () => {
  const bookTitleInput = document.querySelector('#book-title');
  const bookCategoryInput = document.querySelector('#book-category');
  const errorMessage = document.querySelector('#error-message');

  const isTitleValid = bookTitleInput.checkValidity();
  bookTitleInput.classList.toggle('error', !isTitleValid);
  errorMessage.classList.toggle('error-title', !isTitleValid);

  const isCategoryValid = bookCategoryInput.checkValidity();
  bookCategoryInput.classList.toggle('error', !isCategoryValid);
  errorMessage.classList.toggle('error-category', !isCategoryValid);

  return isTitleValid && isCategoryValid;
};

export default formIsValid;
