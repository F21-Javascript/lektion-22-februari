class Book {
    constructor(author, title, borrowed) { // Varje klass har en konstruktor som initierar alla egenskaper
        this.author = author;
        this.title = title;
        this.borrowed = borrowed;
    }

    getAuthor() {
        return this.author;
    }

    setAuthor(newAuthor) {
        this.author = newAuthor;
    }
}

const firstBook = new Book('Lewis Carroll', 'Alice in Wonderland', false);
const secondBook = new Book('Lewis Carroll', 'Through the Looking-Glass', true);

console.log('firstBook:', firstBook);
console.log('secondBook:', secondBook);

console.log('Author:', firstBook.getAuthor());








// const books = [
//     { author: 'Lewis Carroll', title: 'Alice in Wonderland', borrowed: false },
//     { author: 'Lewis Carroll', title: 'Through the Looking-Glass', borrowed: true },
// ]
// let newBooks = [];

// for(let book of books) {
//     let obj = {
//         author: book.author,
//         title: book.title,
//         borrowed: book.borrowed
//     };

//     newBooks.push(obj);
// }

// for(let book of books) {
//     const myBook = new Book(book.author, book.title, book.borrowed);

//     newBooks.push(myBook);
// }