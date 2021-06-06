
const getTotalBooksCount = books => books.length;

const getAccountsLength = accounts => accounts.length;
/* helper function ^ used below in getTotalAccountsCount */

function getTotalAccountsCount(accounts) {
  let totalAccounts = getAccountsLength(accounts);
  return totalAccounts;
};

function getBooksBorrowedCount(books) {
  let borrowed = 0;

books.forEach((book) => {
  const borrowInfo = book.borrows;
  const stillBorrowed = borrowInfo.find((borrow) => borrow.returned === false);
  if (stillBorrowed) {
    borrowed = borrowed + 1;
  }
});

return borrowed;
};

function getMostCommonGenres(books) {
  let mostCommonGenres = books.reduce((acc, book) => {
		acc[book.genre] != null
			? acc[book.genre].count++
			: acc[book.genre] = { name: book.genre, count: 1 }
		return acc;
	}, {});
	return Object.keys(mostCommonGenres)
		.map(genre => mostCommonGenres[genre])
		.sort((a,b) => b.count - a.count)
		.slice(0,5);
  };

function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
   }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
   console.log(books);
};

function getMostPopularAuthors(books, authors) {
  let mostPopular = [];
  books.forEach((book) => {
    authors.forEach((author) => {
      const fullName = `${author.name.first} ${author.name.last}`
      if (book.authorId === author.id) {
        mostPopular.push({name: fullName, count: book.borrows.length})
      }
    })
  });
  return mostPopular.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
};


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
