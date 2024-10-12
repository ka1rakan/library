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

class Book {
  constructor(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.id = ++maxId;
  } 
  addToLibrary() {
    library.push(this);
  }
  createCard() {
    const card = document.createElement('div');
    card.classList = ['card'];

    const title = document.createElement('h2');
    title.classList = ['title'];
    title.innerText = `"${this.title}"`;

    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    li1.innerText = this.author;
    ul.appendChild(li1);
    const li2 = document.createElement('li');
    li2.innerText = this.pages;
    ul.appendChild(li2);
    const read = document.createElement('input');
    read.type = "checkbox";
    read.checked = this.read ? true : false;
    read.addEventListener('click', () => {
      this.read = !this.read
    })
    ul.appendChild(read);

    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.classList = ['remove-btn']
    removeButton.addEventListener('click', () => {
      container.removeChild(card);
      this.removeBook();
    })

    card.appendChild(title);
    card.appendChild(ul);
    card.appendChild(removeButton);

    return card;
  }

  removeBook() {
    const ind = library.findIndex(book => book.id === this.id);
    library.splice(ind, 1);
  }

  toggleBookRead() {
    const book = library.find(book => book.id === id);
    book.read = !book.read;
  }
}

addBookBtn.addEventListener('click', () => {
  modal.showModal();
  modal.classList = 'dialog-open';
})

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault()
  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  newBook.addToLibrary();
  container.appendChild(newBook.createCard());

  resetInputs();
  modal.close()
})

function resetInputs() {
  title.value = null
  author.value = null;
  author.pages = null;
  author.read = null;
}