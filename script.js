function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "have not read yet");
const it = new Book("It", "Stephen King", 1061, "have not read yet")

const myLibrary = [theHobbit, it];

function addBookToLibrary(){
    
}

const addBookBtn = document.querySelector("#add-book-btn")
const dialog = document.querySelector("dialog");
const modalInput = document.querySelectorAll("dialog input");
addBookBtn.addEventListener("click", ()=>{
    dialog.showModal();
})
const obj={};
modalInput.forEach((input)=>{
    input.addEventListener("change",(e)=>{
        obj[e.target.id] = e.target.value;
    })
})

const container = document.querySelector(".container");
for (let index in myLibrary){
    const book = myLibrary[index];
    const card = document.createElement("div");
    card.className = "card";
    for(let key in myLibrary[index]){
        const li = document.createElement("li");
        li.innerText = `${key}: ${book[key]}`
        card.appendChild(li)
    }
    container.appendChild(card)
}
