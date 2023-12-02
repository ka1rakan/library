function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.read = read;
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");


const myLibrary = [theHobbit];


function addBookToLibrary(newBook){
    const readSwitch = document.createElement("button");
    myLibrary.push(newBook);
    const card = document.createElement("div");
    card.className = "card";
    const ul = document.createElement("ul");
    for(let key in newBook){
        if(key!=="read"){
            const li = document.createElement("li");
            li.innerText = newBook[key]
            ul.appendChild(li)
        }else if(key==="read"){
            readSwitch.innerText = newBook[key];
            if (readSwitch.innerText=="read"){
                readSwitch.classList = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded button-read";
            }else if(readSwitch.innerText=="not read"){
                readSwitch.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button-not-read"
            }
            readSwitch.addEventListener("click",(e)=>{
                if(readSwitch.innerText == "read"){
                    readSwitch.innerText = "not read";
                    readSwitch.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button-not-read"
                }else if(readSwitch.innerText == "not read"){
                    readSwitch.innerText = "read";
                    readSwitch.classList = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded button-read"
                }
            })
            ul.appendChild(readSwitch)
        }
    }
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove"
    removeButton.classList = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded remove-button"
    removeButton.addEventListener("click",(e)=>{
        e.target.parentNode.parentNode.remove();
    })
    ul.appendChild(removeButton);
    card.appendChild(ul);
    container.appendChild(card);
}


const container = document.querySelector(".container");
for (let index in myLibrary){
    addBookToLibrary(myLibrary[index])
    
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

const newBook= new Book();
modalInput.forEach((input)=>{
    input.addEventListener("change",(e)=>{
        newBook[e.target.id] = e.target.value;
    })
})


addBookBtn.addEventListener("click",(e)=>{
    if(newBook.title && newBook.author && newBook.pages){
        if(newBook.read==undefined){
            newBook.read = "not read"
        }else{
            newBook.read = "read"
        }
        addBookToLibrary(newBook);
    }
})



