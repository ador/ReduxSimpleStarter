export function selectBook(book) {
  // should return an object with a type
  console.log('click! on ' , book.title);
  return {
    type:'BOOK_SELECTED',
    payload: book
  }
}
