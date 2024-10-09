const addBookBtn = document.querySelector('.addBook');
const container = document.querySelector('.container')

const library = [];
let maxId = 0;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = ++maxId;
}

function addBookToLibary(book) {
  library.push(book);
}

function removeBookFromLibrary(id) {
  const ind = library.findIndex(book => book.id === id);
  library.splice(ind, 1);
}

function toggleBookRead(id) {
  const book = library.find(book => book.id === id);
  book.read = !book.read;
}

addBookBtn.addEventListener('click', () => {
  const book1 = new Book('test', 'testAuth', 100, true);
  const node = document.createElement('div');
  node.innerText = book1.title;
  container.appendChild(node)
})