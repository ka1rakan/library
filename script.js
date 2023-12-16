class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    addSwitchBtn(){
        const readSwitch = document.createElement("button");
        readSwitch.innerText = this.read ? "read" : "not read";
            if(this.read){
                readSwitch.classList = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded button-read";
            }else if(!this.read){
                readSwitch.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button-not-read"
            }
            readSwitch.addEventListener("click", (e) => {
                if(this.read){
                    this.read = !this.read;
                    readSwitch.innerText = "not read";
                    readSwitch.classList = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded button-not-read"
                }else{
                    this.read = !this.read;
                    readSwitch.innerText = "read";
                    readSwitch.classList = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded button-read"
                }
            })
        return readSwitch
    }

    addRemoveBtn(){
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove"
        removeButton.classList = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded remove-button"
        removeButton.addEventListener("click",(e)=>{
            e.target.parentNode.parentNode.remove();
        })
        return removeButton;
    }

    addToLibrary(){
        myLibrary.push(this);
        const card = document.createElement("div");
        card.className = "card";
        const ul = document.createElement("ul");
        for(let key in this){
            if(key!=="read"){
                const li = document.createElement("li");
                li.innerText = this[key];
                ul.appendChild(li);
            }else if(key==="read"){
                ul.appendChild(this.addSwitchBtn())
            }
        }
        ul.appendChild(this.addRemoveBtn());
        card.appendChild(ul);
        container.appendChild(card);
    }

}
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read");

const myLibrary = [theHobbit];


const container = document.querySelector(".container");
for (let index in myLibrary){
    myLibrary[index].addToLibrary()
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

const newBook = new Book();
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
        newBook.addToLibrary();
    }
})



