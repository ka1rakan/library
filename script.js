const addBookBtn = document.querySelector('.addBook');
const container = document.querySelector('.container')
const modal = document.querySelector('dialog');
const confirmBtn = document.querySelector('.confirm-btn');
const title = document.querySelector('input#title');
const author = document.querySelector('input#author')
const pages = document.querySelector('input#pages')
const read = document.querySelector('input#read')

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

function addBookCard(book) {
  const card = document.createElement('div');
  card.classList = ['card'];
  const title = document.createElement('h2');
  title.classList = ['title'];
  title.innerText = `"${book.title}"`;
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  li1.innerText = book.author;
  ul.appendChild(li1);
  const li2 = document.createElement('li');
  li2.innerText = book.pages;
  ul.appendChild(li2);
  const li3 = document.createElement('li');
  li3.innerText = book.read;
  ul.appendChild(li3);
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Remove'
  removeButton.classList = ['remove-btn']
  removeButton.addEventListener('click', () => {
    container.removeChild(card);
    removeBookFromLibrary(book.id);
  })

  card.appendChild(title);
  card.appendChild(ul);
  card.appendChild(removeButton);
  container.appendChild(card);
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
  modal.showModal();
  modal.classList = 'dialog-open';
})

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  console.log(newBook)
  addBookToLibary(newBook);
  addBookCard(newBook);

  title.value = null
  author.value = null;
  author.pages = null;
  author.read = null;
  modal.close()
})