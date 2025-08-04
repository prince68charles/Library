const bookLibrary = [];


const displayBooks = document.getElementById("display")

const createNewBook = document.getElementById("new-book")

const bookForm = document.getElementById("my-form")

const bookDisplay = document.querySelector(".book-display")



bookForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const newBook = []

    const newTitle = document.getElementById("title")

    const newAuthor = document.getElementById("author")

    const newPages = document.getElementById("pages")

   

    newBook.push(newTitle)
    newBook.push(newAuthor)
    newBook.push(newPages)


    addBookToLibrary(newBook)

    bookForm.reset();

})




function addBookToLibrary (bookArr) {


    bookLibrary.push(bookArr)

   



}


function displayLibrary (bookLibrary) {


    for (i=0; i < bookLibrary.length; i++) {

        const book = bookLibrary[i]

        const index = i

        let bookDiv = document.createElement("div")

        bookDiv.innerText = `Book ${index + 1}

        Title: ${book[0]}
        Author: ${book[1]}
        Pages: ${book[2]}`;

        bookDisplay.appendChild(bookDiv);


    }



}



displayBooks.addEventListener("click", () => {


    displayLibrary(bookLibrary)

})