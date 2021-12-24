import React from 'react';
import BookShelf from './BookShelf';

const BookShelves = ({books}) => {

    const currentlyReading = books.filter((book) => book.bookShelf === "currentlyReading");
    const wantToRead = books.filter((book) => book.bookShelf === "wantToRead");
    const read = books.filter((book) => book.bookShelf === "read");

    return (
        <div>
            <BookShelf bookShelfTitle='Currently Reading' books={currentlyReading}/>
            <BookShelf bookShelfTitle='Want to Read' books={wantToRead}/>
            <BookShelf bookShelfTitle='Read' books={read}/>
        </div>
    )
}

export default BookShelves