// define list
const list = document.querySelector('#book-list ul');


const li  = document.createElement('li'); 
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');

deleteBtn.textContent ="delete";
bookName.textContent = "New Book";

// appending

li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

// A reusable function 

// select the list


// reusable function to add a book
function addBook(bookTitle) {
    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text
    bookName.textContent = bookTitle;
    deleteBtn.textContent = "delete";

    // add classes (optional for styling)
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append elements
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}

addBook("The Alchemist");
addBook("Atomic Habits");
addBook("Harry Potter");

//Step 2 
 list.addEventListener('click', function(e){
    if(e.target.className  == 'delete'){
        const li  =e.target.parentElement;
        list.removeChild(li);
    }
 });

 // step 3

 
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault(); // stop form from refreshing the page
    
    const value = addForm.querySelector('input[type="text"]').value;


})




// Step 4: hide books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
        list.style.display = 'none';   // hide the list
    } else {
        list.style.display = 'block';  // show the list again
    }
});
 
// Read 

if (bookName.classList.contains('read')) {
  bookName.classList.remove('read');
} else {
  bookName.classList.add('read');
}


// Storing books

// Global books array


// Step 1: make an empty array
let books = [];

 addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value  = addForm.querySelector('input[type="text"]').value;

    // save into array
    books.push(value);
    console.log(books);   // show array after each addition

    // create Element
    const li  = document.createElement('li');
    const bookName  = document.createElement('span');
    const deleteBtn  = document.createElement('span');

    // add content
    deleteBtn.textContent  = 'delete';
    bookName.textContent  = value;

    // add class
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to dom
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});



