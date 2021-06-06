function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
};
   
function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) =>
  accountA.name.last > accountB.name.last ? 1 : -1
);
console.log(result);
return result;
};

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const accountID = account.id;
  books.forEach((book) => book.borrows.forEach((isBorrowed) => accountID === isBorrowed.id && counter++));
  return counter;
};

function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      booksPossessed.push(book);
    }
  });
  console.log(booksPossessed);
  booksPossessed.forEach(book=>{
    let authorOfBook = authors.find(author => author.id === book.authorId);
    book['author'] = authorOfBook;
  })
  console.log(booksPossessed);
  return booksPossessed;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

