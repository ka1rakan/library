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
  const card = document.createElement('div');
  card.classList = ['card'];
  const title = document.createElement('h2');
  title.classList = ['title'];
  title.innerText = book1.title;
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  li1.innerText = `author: ${book1.author}`;
  ul.appendChild(li1);
  const li2 = document.createElement('li');
  li2.innerText = `pages: ${book1.pages}`;
  ul.appendChild(li2);
  const li3 = document.createElement('li');
  li3.innerText = book1.read;
  ul.appendChild(li3);
  card.appendChild(title);
  card.appendChild(ul);


  container.appendChild(card)
})
