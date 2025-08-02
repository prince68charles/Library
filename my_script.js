const bookLibrary = [];


const displayBooks = document.getElementById("display")

const createNewBook = document.getElementById("new-book")

const bookForm = document.getElementById("my-form")

const bookDisplay = document.querySelector(".book-selector")



bookForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const newBook = []

    const newTitle = document.getElementById("title").value;

    const newAuthor = document.getElementById("author").value;

    const newPages = document.getElementById("pages").value;


    newBook.push(newTitle)
    newBook.push(newAuthor)
    newBook.push(newPages)


    addBookToLibrary(newBook)

})




function addBookToLibrary (bookArr) {


    bookLibrary.push(bookArr)

   



}


function displayLibrary (bookLibrary) {


    let display = document.createElement("div")

    display.innerText = bookLibrary

    bookDisplay.appendChild(display)




}