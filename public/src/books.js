function findAuthorById(authors, id) {
  let authorById = authors.find((author) => author.id === id)
  return authorById
}

function findBookById(books, id) {
  let booksById = books.find((book) => book.id === id)
  return booksById
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  let returned = books.filter((book) => book.borrows[0].returned === true)
  return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
