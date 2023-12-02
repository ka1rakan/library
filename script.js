function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read yet");
const it = new Book("It", "Stephen King", 1061, "not read yet")

const myLibrary = [theHobbit, it];

function addBookToLibrary(newBook){
    myLibrary.push(newBook);
    const card = document.createElement("div");
    card.className = "card";
    const ul = document.createElement("ul");
    for(let key in newBook){
        const li = document.createElement("li");
        li.innerText = `${newBook[key]}`
        ul.appendChild(li)
    }
    card.appendChild(ul);
    container.appendChild(card);
}


const container = document.querySelector(".container");
for (let index in myLibrary){
    const book = myLibrary[index];
    const card = document.createElement("div");
    card.className = "card";
    const ul = document.createElement("ul")
    for(let key in myLibrary[index]){
        const li = document.createElement("li");
        li.innerText = `${key}: ${book[key]}`
        ul.appendChild(li)
    }
    card.appendChild(ul)
    container.appendChild(card)
}


const openModalBtn = document.querySelector("#add-book-btn")
const dialog = document.querySelector("dialog");
const modalInput = document.querySelectorAll("dialog input");
const addBookBtn = document.querySelector("#confirm-dialog");
const addBookForm = document.querySelector("dialog form")

openModalBtn.addEventListener("click", ()=>{
    addBookForm.reset();
    dialog.showModal();
})

const newBook={};
modalInput.forEach((input)=>{
    input.addEventListener("change",(e)=>{
        newBook[e.target.id] = e.target.value;
    })
})


addBookBtn.addEventListener("click",(e)=>{
    if(newBook.title && newBook.author && newBook.pages){
        if(newBook.read==undefined){
            newBook.read = "not read yet"
        }
        addBookToLibrary(newBook);
    }
})



